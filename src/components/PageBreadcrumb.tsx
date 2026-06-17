import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

export default function PageBreadcrumb({ items }: Props) {
  return (
    <section
      style={{
        padding: "28px 48px 0",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .page-breadcrumb a:hover {
          text-decoration: underline;
          color: var(--accent);
        }
      `,
        }}
      />
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <nav
          className="page-breadcrumb"
          aria-label="Breadcrumb"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            color: "#6a7a8e",
          }}
        >
          {items.map((item, index) => (
            <span key={`${item.label}-${index}`}>
              {index > 0 ? <span aria-hidden="true"> / </span> : null}
              {item.href ? (
                <Link
                  href={item.href}
                  style={{
                    color: "#134f89",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <span style={{ color: "#0a1e3d", fontWeight: 600 }}>{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
