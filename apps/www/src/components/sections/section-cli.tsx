import { Heading, HeadingTitle } from "@/components/heading";
import { Section } from "@/components/section";

export const SectionCLI = () => (
  <Section>
    <div className="col-span-12 grid grid-cols-12 items-start gap-4 overflow-x-hidden lg:items-center">
      <div className="col-span-full lg:col-end-7">
        <Heading direction="left">
          <HeadingTitle>Quick Start, No Fuss</HeadingTitle>
        </Heading>

        <p className="mb-4 text-base md:text-xl">
          Say goodbye to tedious setup and hello to a world of smooth
          development with the Peppy CLI. It&apos;s the ultimate tool for modern
          developers, designed to elevate your workflow with minimal effort.
        </p>
        <p className="mb-4 text-base md:text-xl ">
          With just a few commands, you&apos;ll unleash the power of
          Peppy&apos;s versatile configurations, including TypeScript and
          Prettier support right out of the box. We&apos;ve carefully crafted
          these configurations to boost your productivity, enhance code quality,
          and reduce the hassle of managing dependencies.
        </p>
        <p className="mb-4 text-base md:text-xl ">
          Take the leap into a world of efficient, modern development — try
          Peppy today!
        </p>
      </div>

      <div className="after:fade-to-r relative col-span-full hidden lg:col-start-8 lg:block">
        <div className="w-[50vw] space-y-8 rounded-2xl border p-8">
          <div className="flex gap-2">
            <div className="h-4 w-4 rounded-full border" />
            <div className="h-4 w-4 rounded-full border" />
            <div className="h-4 w-4 rounded-full border" />
          </div>
          <div className="pl-7">
            <div aria-hidden="true" className="pb-2">
              <pre>
                <span className="text-brand">$</span>{" "}
                <span className="text-brand">pscale</span> branch delete beam
                fix-timestamps
                <br />
                <span className="text-brand">?</span>{" "}
                <span className="font-semibold">
                  <span className="text-muted-foreground">
                    Please type{" "}
                    <span className="font-semibold">beam/fix-timestamps</span>{" "}
                    to confirm:
                  </span>
                </span>{" "}
                <span className="text-primary">beam/fix-timestamps</span>
                <br />
                <span className="text-muted-foreground">
                  Branch <span className="font-semibold">fix-timestamps</span>{" "}
                  was successfully deleted from{/* */}{" "}
                  <span className="font-semibold">beam</span>.
                </span>
                <br />
                <br />
                <span className="text-brand">$</span>{" "}
                <span className="text-brand">pscale</span> branch create beam
                add-upvotes
                <br />
                <span className="text-muted-foreground">
                  Branch <span className="font-semibold">add-upvotes</span> was
                  successfully created.
                </span>
                <br />
                <br />
                <span className="text-brand">$</span>{" "}
                <span className="text-brand">pscale</span> branch list beam
                <br />
                <span className="text-muted-foreground">
                  NAME &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;PARENT
                  &nbsp; &nbsp; PRODUCTION &nbsp; CREATED AT
                  <br />
                  <span className="text-muted-foreground">
                    ----------------- ---------- ------------ ---------------
                  </span>
                  <br />
                  main &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;n/a
                  &nbsp; &nbsp; &nbsp; &nbsp;Yes &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp;4 months ago
                  <br />
                  add-upvotes &nbsp; &nbsp; &nbsp; main &nbsp; &nbsp; &nbsp; No
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1 minute ago
                  <br />
                  user-index &nbsp; &nbsp; &nbsp; &nbsp;main &nbsp; &nbsp;
                  &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2 days ago
                  <br />
                  revert-comments &nbsp; main &nbsp; &nbsp; &nbsp; No &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; 8 days ago
                  <br />
                  more-timestamps &nbsp; main &nbsp; &nbsp; &nbsp; No &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; 2 weeks ago
                  <br />
                  staging &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; n/a &nbsp; &nbsp;
                  &nbsp; &nbsp;Yes &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;3 months
                  ago
                  <br />
                  perf-testing &nbsp; &nbsp; &nbsp;staging &nbsp; &nbsp;No
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 4 days ago
                  <br />
                  drop-unreads &nbsp; &nbsp; &nbsp;staging &nbsp; &nbsp;No
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1 month ago
                </span>
              </pre>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  </Section>
);
