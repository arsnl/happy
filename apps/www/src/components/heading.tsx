import { cva, type VariantProps } from "class-variance-authority";
import Balance from "react-wrap-balancer";
import { cn } from "@/lib/utils";

const headingVariants = cva("flex max-w-5xl flex-col", {
  variants: {
    direction: {
      left: "items-start text-left mr-auto",
      center: "items-center text-center mx-auto",
      right: "items-end text-right ml-auto",
    },
    gap: {
      tight: "gap-3 pb-6",
      normal: "gap-6 pb-14",
    },
  },
  defaultVariants: {
    direction: "center",
    gap: "normal",
  },
});

export type HeadingProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof headingVariants>;

export const Heading = ({
  children,
  className,
  direction,
  gap,
  ...props
}: HeadingProps) => (
  <div
    className={cn(headingVariants({ direction, gap }), className)}
    {...props}
  >
    {children}
  </div>
);

const headingTitleVariants = cva(
  "font-extrabold leading-[1] tracking-tighter ",
  {
    variants: {
      tag: {
        h1: "text-4xl md:text-5xl",
        h2: "text-3xl md:text-4xl",
      },
    },
    defaultVariants: {
      tag: "h2",
    },
  },
);

export type HeadingTitleProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingTitleVariants>;

export const HeadingTitle = ({
  children,
  className,
  tag,
  ...props
}: HeadingTitleProps) => {
  const Comp = tag || "h2";

  return (
    <Comp className={cn(headingTitleVariants({ tag }), className)} {...props}>
      <Balance>{children}</Balance>
    </Comp>
  );
};

export type HeadingSubtextProps = React.HTMLAttributes<HTMLParagraphElement>;

export const HeadingSubtext = ({
  children,
  className,
  ...props
}: HeadingSubtextProps) => (
  <p
    className={cn(
      "max-w-3xl text-lg text-muted-foreground sm:text-xl",
      className,
    )}
    {...props}
  >
    <Balance>{children}</Balance>
  </p>
);
