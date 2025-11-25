"use client"

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Floating code symbols */}
      <div className="absolute top-1/4 left-5 text-4xl text-primary/20 animate-float">{"{"}</div>
      <div className="absolute top-1/3 right-8 text-4xl text-accent/20 animate-float" style={{ animationDelay: "1s" }}>
        {"}"}
      </div>
      <div
        className="absolute bottom-1/4 left-1/4 text-4xl text-primary/20 animate-float"
        style={{ animationDelay: "2s" }}
      >
        /&gt;
      </div>
      <div
        className="absolute top-2/3 right-1/4 text-4xl text-accent/20 animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        {"<"}
      </div>
    </div>
  )
}
