import { PropsWithChildren } from "react";

interface NeonButtonProps extends PropsWithChildren {
  href?: string;
  download?: boolean;
  variant?: "primary" | "ghost";
}

export const NeonButton = ({ children, href, download, variant = "primary" }: NeonButtonProps) => {
  const className = `neon-button neon-button--${variant}`;

  if (href) {
    return (
      <a className={className} href={href} download={download}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} type="button">
      {children}
    </button>
  );
};
