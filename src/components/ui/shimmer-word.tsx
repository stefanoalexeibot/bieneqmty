// ShimmerWord — The last word of a headline, rendered in italic serif with a flowing gold-green gradient.
// Usage: <h2>Bienestar <ShimmerWord>Redefinido</ShimmerWord></h2>

export function ShimmerWord({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`shimmer-word ${className}`}>
      {children}
    </span>
  );
}
