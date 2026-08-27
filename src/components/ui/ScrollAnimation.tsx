'use client'

import { useEffect, useRef, useState } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

export default function ScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [images, setImages] = useState<HTMLImageElement[]>([])
  const [loading, setLoading] = useState(true)
  const [progressLoaded, setProgressLoaded] = useState(0)

  // Preload all 50 frames
  useEffect(() => {
    const totalFrames = 50
    const loadedImages: HTMLImageElement[] = []
    let loadedCount = 0

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image()
      const frameStr = String(i).padStart(3, '0')
      img.src = `/ezgif-BG-jpg/ezgif-frame-${frameStr}.jpg`
      img.onload = () => {
        loadedCount++
        setProgressLoaded(Math.round((loadedCount / totalFrames) * 100))
        if (loadedCount === totalFrames) {
          setLoading(false)
        }
      }
      img.onerror = () => {
        // Handle error gracefully so we don't hang the loading screen
        loadedCount++
        setProgressLoaded(Math.round((loadedCount / totalFrames) * 100))
        if (loadedCount === totalFrames) {
          setLoading(false)
        }
      }
      loadedImages.push(img)
    }
    setImages(loadedImages)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Map progress (0 to 1) to image index (0 to 49)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, 49])

  // Helper to draw a specific frame
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current
    if (!canvas || images.length === 0) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const img = images[index]
    if (!img) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Calculate aspect ratio (Cover behavior for physical pixels)
    const canvasWidth = canvas.width
    const canvasHeight = canvas.height
    const imgWidth = img.width
    const imgHeight = img.height

    const imgRatio = imgWidth / imgHeight
    const canvasRatio = canvasWidth / canvasHeight

    let drawWidth = canvasWidth
    let drawHeight = canvasHeight
    let offsetX = 0
    let offsetY = 0

    if (imgRatio > canvasRatio) {
      drawWidth = canvasHeight * imgRatio
      offsetX = (canvasWidth - drawWidth) / 2
    } else {
      drawHeight = canvasWidth / imgRatio
      offsetY = (canvasHeight - drawHeight) / 2
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
  }

  // Handle drawing when index changes
  useEffect(() => {
    if (loading || images.length === 0) return

    // Draw initial frame
    drawFrame(0)

    const unsubscribe = frameIndex.on('change', (latest) => {
      const idx = Math.min(Math.max(Math.floor(latest), 0), 49)
      drawFrame(idx)
    })

    return () => unsubscribe()
  }, [images, loading])

  // Canvas size and resize handler
  useEffect(() => {
    if (loading) return

    const handleResize = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr

      // Re-draw current frame
      const currentProgress = scrollYProgress.get()
      const currentIdx = Math.min(Math.max(Math.floor(currentProgress * 49), 0), 49)
      drawFrame(currentIdx)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [loading, images, scrollYProgress])

  // Framer Motion transforms for the overlay text cards
  const text1Opacity = useTransform(scrollYProgress, [0.02, 0.1, 0.22, 0.28], [0, 1, 1, 0])
  const text1Y = useTransform(scrollYProgress, [0.02, 0.1, 0.22, 0.28], [40, 0, 0, -40])

  const text2Opacity = useTransform(scrollYProgress, [0.34, 0.42, 0.55, 0.61], [0, 1, 1, 0])
  const text2Y = useTransform(scrollYProgress, [0.34, 0.42, 0.55, 0.61], [40, 0, 0, -40])

  const text3Opacity = useTransform(scrollYProgress, [0.67, 0.75, 0.88, 0.96], [0, 1, 1, 0])
  const text3Y = useTransform(scrollYProgress, [0.67, 0.75, 0.88, 0.96], [40, 0, 0, -40])

  // Clickable links/pointer events should only enable when the card is active
  const pointerEvents1 = useTransform(scrollYProgress, (latest) => latest > 0.02 && latest < 0.28 ? 'auto' : 'none')
  const pointerEvents2 = useTransform(scrollYProgress, (latest) => latest >= 0.34 && latest < 0.61 ? 'auto' : 'none')
  const pointerEvents3 = useTransform(scrollYProgress, (latest) => latest >= 0.67 && latest < 0.96 ? 'auto' : 'none')

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-black">
      {/* Sticky container for canvas and text */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {loading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
            <div className="relative w-16 h-16 mb-4">
              <div className="absolute inset-0 rounded-full border-4 border-white/5" />
              <div className="absolute inset-0 rounded-full border-4 border-green-neon border-t-transparent animate-spin" />
            </div>
            <div className="text-md font-display font-medium tracking-wide text-white mb-1">
              Initializing Data Pipelines...
            </div>
            <div className="text-xs font-mono text-green-neon/70">
              {progressLoaded}% Loaded
            </div>
          </div>
        ) : (
          <>
            {/* Canvas sequence */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
              style={{ filter: 'brightness(0.85) contrast(1.15)' }}
            />

            {/* Vignette overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-black/90 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/95 pointer-events-none" />

            {/* Tech grid overlay */}
            <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center h-full">
              <div className="max-w-2xl text-left relative min-h-[450px] md:min-h-[380px] w-full flex items-center">
                {/* Slide 1 */}
                <motion.div
                  style={{ opacity: text1Opacity, y: text1Y, pointerEvents: pointerEvents1 }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div className="inline-flex items-center gap-2 badge badge-green mb-6 w-fit">
                    <span className="neon-dot animate-pulse" />
                    <span>01 / Ingestion</span>
                  </div>
                  <h3 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                    A World Built <br />
                    <span className="text-gradient-green">on Raw Data</span>
                  </h3>
                  <p className="text-white/60 text-lg leading-relaxed">
                    Every click, transaction, and system event generates a digital footprint. Modern organizations process petabytes of unstructured raw data every single day to drive critical business decisions.
                  </p>
                </motion.div>

                {/* Slide 2 */}
                <motion.div
                  style={{ opacity: text2Opacity, y: text2Y, pointerEvents: pointerEvents2 }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div className="inline-flex items-center gap-2 badge badge-green mb-6 w-fit">
                    <span className="neon-dot animate-pulse" />
                    <span>02 / Transformation</span>
                  </div>
                  <h3 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                    The Engineering <br />
                    <span className="text-gradient-green">Bottleneck</span>
                  </h3>
                  <p className="text-white/60 text-lg leading-relaxed">
                    Data is useless without structure. Raw logs must be ingested, cleaned, validated, and transformed through resilient pipelines. That is the core mission of a Data Engineer.
                  </p>
                </motion.div>

                {/* Slide 3 */}
                <motion.div
                  style={{ opacity: text3Opacity, y: text3Y, pointerEvents: pointerEvents3 }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div className="inline-flex items-center gap-2 badge badge-green mb-6 w-fit">
                    <span className="neon-dot animate-pulse" />
                    <span>03 / Activation</span>
                  </div>
                  <h3 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                    Architect Your <br />
                    <span className="text-gradient-green">DE Career Journey</span>
                  </h3>
                  <p className="text-white/60 text-lg leading-relaxed mb-8">
                    Learn to build cloud-scale platforms using Apache Spark, Kafka, AWS, and Snowflake. Become the Sherpa that guides companies to peak data intelligence.
                  </p>
                  <div>
                    <a href="#programs" className="btn-primary text-sm py-4 px-8">
                      Explore Our Programs
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
