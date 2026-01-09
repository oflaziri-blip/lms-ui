"use client"

interface SparklineChartProps {
  data: number[]
}

export function SparklineChart({ data }: SparklineChartProps) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * 100
      const y = 100 - ((value - min) / range) * 100
      return `${x},${y}`
    })
    .join(" ")

  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      preserveAspectRatio="none"
      style={{ height: "48px" }}
    >
      <polyline
        points={points}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon
        points={`0,100 ${points} 100,100`}
        fill="hsl(var(--primary))"
        fillOpacity="0.1"
      />
    </svg>
  )
}
