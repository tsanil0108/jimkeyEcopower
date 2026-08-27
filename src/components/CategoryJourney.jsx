import './CategoryJourney.css'

import {
  useEffect,
  useRef,
  useState,
} from 'react'

import { Link } from 'react-router-dom'

import {
  ArrowUpRight,
  Flame,
  Cable,
  SprayCan,
  FileCheck2,
  Trash2,
  Building2,
  ImageOff,
  Mouse,
} from 'lucide-react'


/* =====================================================
   JOURNEY DATA
===================================================== */

const steps = [
  {
    id: 1,
    num: '01',
    icon: Flame,
    name: 'Alternative Fuel Resource',
    short: 'AFR',
    title: 'Alternative fuels & recovered feedstock',
    image: '/journey/afr.jpg',
  },

  {
    id: 2,
    num: '02',
    icon: Cable,
    name: 'Steel Wire',
    short: 'Steel Wire',
    title: 'Recovered steel from tyre processing',
    image: '/journey/steel-wire.jpg',
  },

  {
    id: 3,
    num: '03',
    icon: SprayCan,
    name: 'Cleaning Chemicals',
    short: 'Chemicals',
    title: 'Cleaning formulations for commercial use',
    image: '/journey/chemicals.jpg',
  },

  {
    id: 4,
    num: '04',
    icon: FileCheck2,
    name: 'Extended Producer Responsibility',
    short: 'EPR',
    title: 'EPR support across regulated waste streams',
    image: '/journey/epr.jpg',
  },

  {
    id: 5,
    num: '05',
    icon: Trash2,
    name: 'Municipal Solid Waste',
    short: 'MSW',
    title: 'Municipal waste-management solutions',
    image: '/journey/municipal.jpg',
  },

  {
    id: 6,
    num: '06',
    icon: Building2,
    name: 'Industry Waste Management',
    short: 'Industrial',
    title: 'Industrial waste handling & recovery',
    image: '/journey/industrial.jpg',
  },
]


/*
  Larger value = more wheel movement needed.
  Smaller value = faster step travel.
*/
const WHEEL_FACTOR = 0.00085

/*
  Smooth interpolation.
  0.08 = very smooth
  0.15 = faster
*/
const EASE = 0.105

const RELEASE_THRESHOLD = 75


export default function CategoryJourney() {

  const sectionRef =
    useRef(null)

  const animationFrameRef =
    useRef(null)

  const currentProgressRef =
    useRef(0)

  const targetProgressRef =
    useRef(0)

  const releaseWheelRef =
    useRef(0)

  const lastDirectionRef =
    useRef(1)


  const [progress, setProgress] =
    useState(0)

  const [activeIndex, setActiveIndex] =
    useState(0)

  const [imageError, setImageError] =
    useState(false)

  const [hovering, setHovering] =
    useState(false)


  /* =====================================================
     ACTIVE STEP
  ====================================================== */

  const current =
    steps[activeIndex]

  const Icon =
    current.icon


  /* =====================================================
     RESET IMAGE ERROR
  ====================================================== */

  useEffect(() => {

    setImageError(false)

  }, [activeIndex])


  /* =====================================================
     REQUEST ANIMATION FRAME

     targetProgress = wheel target
     currentProgress = visible smooth progress
  ====================================================== */

  useEffect(() => {

    function animate() {

      const currentValue =
        currentProgressRef.current

      const targetValue =
        targetProgressRef.current


      const difference =
        targetValue -
        currentValue


      /*
        Smoothly catch target.
      */
      if (
        Math.abs(difference) >
        0.0001
      ) {

        currentProgressRef.current =
          currentValue +
          difference *
          EASE

      } else {

        currentProgressRef.current =
          targetValue

      }


      const nextProgress =
        currentProgressRef.current


      setProgress(
        nextProgress
      )


      /*
        Determine nearest active step.
      */
      const stepFloat =
        nextProgress *
        (steps.length - 1)


      const nextIndex =
        Math.max(
          0,
          Math.min(
            steps.length - 1,
            Math.round(stepFloat)
          )
        )


      setActiveIndex(
        (previous) =>
          previous === nextIndex
            ? previous
            : nextIndex
      )


      animationFrameRef.current =
        requestAnimationFrame(
          animate
        )
    }


    animationFrameRef.current =
      requestAnimationFrame(
        animate
      )


    return () => {

      if (
        animationFrameRef.current
      ) {

        cancelAnimationFrame(
          animationFrameRef.current
        )

      }

    }

  }, [])


  /* =====================================================
     RELEASE TO NEXT / PREVIOUS PAGE AREA
  ====================================================== */

  function releaseSection(
    direction
  ) {

    const section =
      sectionRef.current


    if (!section) {
      return
    }


    const rect =
      section
        .getBoundingClientRect()


    if (
      direction === 'down'
    ) {

      /*
        Move to section immediately below.
      */
      const target =
        window.scrollY +
        rect.bottom -
        72


      window.scrollTo({
        top: target,
        behavior: 'smooth',
      })

    } else {

      /*
        Move above journey.
      */
      const target =
        window.scrollY +
        rect.top -
        window.innerHeight *
          0.55


      window.scrollTo({
        top:
          Math.max(
            0,
            target
          ),

        behavior: 'smooth',
      })

    }

  }


  /* =====================================================
     WHEEL HANDLER
  ====================================================== */

  useEffect(() => {

    const section =
      sectionRef.current


    if (!section) {
      return
    }


    function handleWheel(
      event
    ) {

      /*
        Touch/mobile scrolling should remain native.
      */
      if (
        window.innerWidth <=
        820
      ) {
        return
      }


      const delta =
        event.deltaY


      if (
        Math.abs(delta) <
        1
      ) {
        return
      }


      const direction =
        delta > 0
          ? 1
          : -1


      lastDirectionRef.current =
        direction


      const target =
        targetProgressRef.current


      const atStart =
        target <= 0.001


      const atEnd =
        target >= 0.999


      /* =================================================
         RELEASE DOWN AFTER 06
      ================================================== */

      if (
        direction > 0 &&
        atEnd
      ) {

        event.preventDefault()


        releaseWheelRef.current +=
          Math.abs(delta)


        if (
          releaseWheelRef.current >=
          RELEASE_THRESHOLD
        ) {

          releaseWheelRef.current =
            0

          releaseSection(
            'down'
          )

        }


        return
      }


      /* =================================================
         RELEASE UP BEFORE 01
      ================================================== */

      if (
        direction < 0 &&
        atStart
      ) {

        event.preventDefault()


        releaseWheelRef.current +=
          Math.abs(delta)


        if (
          releaseWheelRef.current >=
          RELEASE_THRESHOLD
        ) {

          releaseWheelRef.current =
            0

          releaseSection(
            'up'
          )

        }


        return
      }


      /*
        Journey is active:
        stop page scrolling.
      */
      event.preventDefault()


      releaseWheelRef.current =
        0


      const nextTarget =
        target +
        delta *
        WHEEL_FACTOR


      targetProgressRef.current =
        Math.max(
          0,
          Math.min(
            1,
            nextTarget
          )
        )

    }


    section.addEventListener(
      'wheel',
      handleWheel,
      {
        passive: false,
      }
    )


    return () => {

      section.removeEventListener(
        'wheel',
        handleWheel
      )

    }

  }, [])


  /* =====================================================
     MANUAL STEP CLICK
  ====================================================== */

  function goToStep(
    index
  ) {

    const nextProgress =
      index /
      (steps.length - 1)


    lastDirectionRef.current =
      nextProgress >
      targetProgressRef.current
        ? 1
        : -1


    targetProgressRef.current =
      nextProgress

  }


  /* =====================================================
     CONTINUOUS ARC MATH
  ====================================================== */

  /*
    Example:
    0.00 = step 1
    0.20 = step 2
    ...
  */

  const stepFloat =
    progress *
    (steps.length - 1)


  const nearestStep =
    Math.round(
      stepFloat
    )


  /*
    localDelta:
    -0.5 → coming from previous
     0   → active center
    +0.5 → moving toward next
  */

  const localDelta =
    stepFloat -
    nearestStep


  /*
    Image travels around RIGHT side of circle.

    angle = 0deg means rightmost active point.
    positive means lower arc.
    negative means upper arc.
  */

  const maxAngle =
    72


  const imageAngle =
    localDelta *
    maxAngle *
    2


  const radius =
    165


  const angleRad =
    imageAngle *
    Math.PI /
    180


  /*
    Circle movement:
    active point is on right edge.

    x = cos(angle)
    y = sin(angle)
  */

  const orbitX =
    Math.cos(
      angleRad
    ) *
    radius


  const orbitY =
    Math.sin(
      angleRad
    ) *
    radius


  /*
    Center the runner.

    At angle 0:
    x = radius
    y = 0
  */

  const imageX =
    orbitX -
    radius


  const imageY =
    orbitY


  /*
    Scale decreases when travelling away
    from active point.
  */

  const distance =
    Math.min(
      1,
      Math.abs(
        localDelta
      ) *
      2
    )


  const imageScale =
    1 -
    distance *
    0.17


  const imageOpacity =
    1 -
    distance *
    0.55


  /*
    Keep image upright while orbiting.
  */

  const imageRotation =
    -imageAngle *
    0.08


  /* =====================================================
     LEFT NUMBER MOTION
  ====================================================== */

  const numberY =
    localDelta *
    150


  const numberOpacity =
    1 -
    Math.min(
      0.7,
      Math.abs(
        localDelta
      ) *
      1.2
    )


  /* =====================================================
     CONTENT OPACITY
  ====================================================== */

  const contentOpacity =
    1 -
    Math.min(
      0.65,
      Math.abs(
        localDelta
      ) *
      1.4
    )


  const contentY =
    localDelta *
    -34


  return (

    <section
      ref={sectionRef}
      className={`
        category-journey-v2
        ${
          hovering
            ? 'is-hovering'
            : ''
        }
      `}
      onMouseEnter={() =>
        setHovering(true)
      }
      onMouseLeave={() => {

        setHovering(false)

        releaseWheelRef.current =
          0

      }}
    >

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="cjv2-heading">

        <span className="cjv2-overline">
          Explore our portfolio
        </span>


        <h2>

          Materials & services that{' '}

          <strong>
            keep resources moving
          </strong>

        </h2>


        <p>

          Scroll through our key
          product and service
          categories.

        </p>

      </div>


      {/* =====================================================
          BODY
      ====================================================== */}

      <div className="cjv2-panel">

        <div className="cjv2-grid">


          {/* =================================================
              LEFT CURVE
          ================================================== */}

          <div className="cjv2-left">

            <div className="cjv2-left-ring" />

            <div className="cjv2-left-ring-inner" />


            <div className="cjv2-left-point">

              <div
                className="cjv2-left-number"
                style={{
                  transform:
                    `translate3d(
                      0,
                      ${numberY}px,
                      0
                    )`,

                  opacity:
                    numberOpacity,
                }}
              >

                {current.num}

              </div>


              <span className="cjv2-green-dot" />

            </div>


            <div className="cjv2-left-counter">

              <strong>
                {current.num}
              </strong>

              <span>
                /
                {String(
                  steps.length
                ).padStart(
                  2,
                  '0'
                )}
              </span>

            </div>

          </div>


          {/* =================================================
              CENTER CONTENT
          ================================================== */}

          <div
            className="cjv2-copy"
            style={{
              opacity:
                contentOpacity,

              transform:
                `translate3d(
                  0,
                  ${contentY}px,
                  0
                )`,
            }}
          >

            <div className="cjv2-category">

              <span className="cjv2-icon">

                <Icon
                  size={21}
                  strokeWidth={1.8}
                />

              </span>


              <span className="cjv2-category-name">

                {current.name}

              </span>

            </div>


            <h3>
              {current.title}
            </h3>


            <Link
              to={`/products?category=${current.id}`}
              className="cjv2-link"
            >

              Explore{' '}
              {current.short}

              <ArrowUpRight
                size={16}
              />

            </Link>


            {/* DOT SELECTOR */}

            <div className="cjv2-dots">

              {steps.map(
                (
                  step,
                  index
                ) => (

                  <button
                    key={
                      step.id
                    }
                    type="button"
                    onClick={() =>
                      goToStep(
                        index
                      )
                    }
                    className={
                      index ===
                      activeIndex
                        ? 'active'
                        : ''
                    }
                    aria-label={
                      step.name
                    }
                  />

                )
              )}

            </div>

          </div>


          {/* =================================================
              RIGHT CIRCULAR IMAGE MOVEMENT
          ================================================== */}

          <div className="cjv2-visual">

            <div className="cjv2-orbit" />

            <div className="cjv2-orbit-inner" />


            <span className="cjv2-orbit-active-dot" />


            <div
              className="cjv2-image-runner"
              style={{
                transform:
                  `translate3d(
                    ${imageX}px,
                    ${imageY}px,
                    0
                  )
                  scale(
                    ${imageScale}
                  )
                  rotate(
                    ${imageRotation}deg
                  )`,

                opacity:
                  imageOpacity,
              }}
            >

              <div className="cjv2-image-card">

                {!imageError ? (

                  <img
                    src={
                      current.image
                    }
                    alt={
                      current.name
                    }
                    onError={() =>
                      setImageError(
                        true
                      )
                    }
                  />

                ) : (

                  <div className="cjv2-image-fallback">

                    <ImageOff
                      size={30}
                    />

                    <strong>
                      {
                        current.name
                      }
                    </strong>

                    <small>
                      Add image in
                      public/journey
                    </small>

                  </div>

                )}


                <div className="cjv2-image-shade" />


                <span className="cjv2-image-num">
                  {current.num}
                </span>


                <div className="cjv2-image-caption">

                  <small>
                    {current.short}
                  </small>

                  <strong>
                    {current.name}
                  </strong>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            FOOTER
        ====================================================== */}

        <div className="cjv2-footer">

          <div className="cjv2-progress">

            <span
              style={{
                width:
                  `${progress * 100}%`,
              }}
            />

          </div>


          <div className="cjv2-hint">

            <Mouse
              size={14}
            />

            <span>

              {progress >=
              0.999
                ? 'Scroll once more to view products'
                : 'Scroll to explore'}

            </span>

          </div>

        </div>

      </div>

    </section>
  )
}