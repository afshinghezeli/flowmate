"use client";

import React, { forwardRef, useEffect, useId, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: React.RefObject<HTMLElement | null>;
  fromRef: React.RefObject<HTMLElement | null>;
  toRef: React.RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export const AnimatedBeam = forwardRef<SVGSVGElement, AnimatedBeamProps>(
  (
    {
      className,
      containerRef,
      fromRef,
      toRef,
      curvature = 0,
      reverse = false,
      duration = Math.random() * 3 + 4,
      delay = 0,
      pathColor = "#3F3788",
      pathWidth = 2,
      pathOpacity = 0.2,
      gradientStartColor = "#713DDD",
      gradientStopColor = "#713DDD",
      startXOffset = 0,
      startYOffset = 0,
      endXOffset = 0,
      endYOffset = 0,
    },
    ref
  ) => {
    const id = useId();
    const [pathD, setPathD] = useState("");
    const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

    const updatePath = useCallback(() => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const fromRect = fromRef.current.getBoundingClientRect();
        const toRect = toRef.current.getBoundingClientRect();

        const fromX = fromRect.left + fromRect.width / 2 - containerRect.left + startXOffset;
        const fromY = fromRect.top + fromRect.height / 2 - containerRect.top + startYOffset;
        const toX = toRect.left + toRect.width / 2 - containerRect.left + endXOffset;
        const toY = toRect.top + toRect.height / 2 - containerRect.top + endYOffset;

        // Create S-curve: straight start, curved middle, straight end
        // Start: vertical down from large box, End: vertical up to small boxes
        const verticalDistance = Math.abs(toY - fromY);
        
        // Control points for S-curve with vertical tangents at both ends
        // First control point: Creates vertical tangent at start (large box)
        const controlPoint1X = fromX; // Same X as start (vertical tangent)
        const controlPoint1Y = fromY + (verticalDistance * 0.5); // 50% down (straight portion)
        
        // Second control point: Creates vertical tangent at end (small box)
        const controlPoint2X = toX; // Same X as end (vertical tangent)
        const controlPoint2Y = toY - (verticalDistance * 0.5); // 50% up (straight portion)

        const path = `M ${fromX} ${fromY} C ${controlPoint1X} ${controlPoint1Y}, ${controlPoint2X} ${controlPoint2Y}, ${toX} ${toY}`;
        setPathD(path);

        setSvgDimensions({
          width: containerRect.width,
          height: containerRect.height,
        });
      }
    }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

    useEffect(() => {
      updatePath();
      window.addEventListener("resize", updatePath);
      return () => window.removeEventListener("resize", updatePath);
    }, [updatePath]);

    return (
      <svg
        ref={ref}
        className={cn("pointer-events-none absolute inset-0 z-0", className)}
        width={svgDimensions.width}
        height={svgDimensions.height}
        viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id={`${id}-gradient`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0%" stopColor={gradientStartColor} stopOpacity="0" />
            <stop offset="25%" stopColor={gradientStartColor} stopOpacity="0.8" />
            <stop offset="75%" stopColor={gradientStopColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Static path */}
        <path
          d={pathD}
          stroke={pathColor}
          strokeWidth={pathWidth}
          strokeOpacity={pathOpacity}
          fill="none"
        />
        
        {/* Animated beam */}
        <path
          d={pathD}
          stroke={`url(#${id}-gradient)`}
          strokeWidth={pathWidth}
          fill="none"
          strokeDasharray="25 25"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dashoffset"
            values={reverse ? "50;0" : "0;50"}
            dur={`${duration}s`}
            begin={`${delay}s`}
            repeatCount="indefinite"
          />
        </path>
      </svg>
    );
  }
);

AnimatedBeam.displayName = "AnimatedBeam";