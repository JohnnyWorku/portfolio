import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BackgroundViz: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const svg = d3.select(svgRef.current);
    
    // Clear previous
    svg.selectAll("*").remove();

    svg.attr("width", width).attr("height", height);

    // Generate random nodes
    const nodes = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1
    }));

    // Draw nodes
    svg.selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .attr("r", d => d.r)
      .attr("fill", "#38bdf8") // Sky blue
      .attr("opacity", d => d.opacity);

    // Animation loop
    const animate = () => {
      svg.selectAll("circle")
        .transition()
        .duration(2000)
        .ease(d3.easeSinInOut)
        .attr("cy", (d: any) => d.y + (Math.random() - 0.5) * 50)
        .attr("cx", (d: any) => d.x + (Math.random() - 0.5) * 50)
        .on("end", animate);
    };

    animate();

    const handleResize = () => {
        // Simple resize handling: just update dimensions, simpler than re-simulating
        if(svgRef.current) {
            svg.attr("width", window.innerWidth).attr("height", window.innerHeight);
        }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <svg ref={svgRef} className="w-full h-full opacity-30" />
    </div>
  );
};

export default BackgroundViz;