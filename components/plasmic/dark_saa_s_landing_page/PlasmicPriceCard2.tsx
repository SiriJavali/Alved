/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 53Xi8PjeNu3UNxbnjUtmHg
// Component: W2FfioVZddzu

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Button from "../../Button"; // plasmic-import: mDqPQunCKBZT/component

import { useScreenVariants as useScreenVariantsdGkOhQb3JToV } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: dGKOhQb3JToV/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: 53Xi8PjeNu3UNxbnjUtmHg/projectcss
import sty from "./PlasmicPriceCard2.module.css"; // plasmic-import: W2FfioVZddzu/css

createPlasmicElementProxy;

export type PlasmicPriceCard2__VariantMembers = {
  primary: "primary";
  borders: "flatLeft" | "flatRight" | "flatCenter";
};
export type PlasmicPriceCard2__VariantsArgs = {
  primary?: SingleBooleanChoiceArg<"primary">;
  borders?: MultiChoiceArg<"flatLeft" | "flatRight" | "flatCenter">;
};
type VariantPropType = keyof PlasmicPriceCard2__VariantsArgs;
export const PlasmicPriceCard2__VariantProps = new Array<VariantPropType>(
  "primary",
  "borders"
);

export type PlasmicPriceCard2__ArgsType = {};
type ArgPropType = keyof PlasmicPriceCard2__ArgsType;
export const PlasmicPriceCard2__ArgProps = new Array<ArgPropType>();

export type PlasmicPriceCard2__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  h4?: Flex__<"h4">;
  button?: Flex__<typeof Button>;
};

export interface DefaultPriceCard2Props {
  primary?: SingleBooleanChoiceArg<"primary">;
  borders?: MultiChoiceArg<"flatLeft" | "flatRight" | "flatCenter">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPriceCard2__RenderFunc(props: {
  variants: PlasmicPriceCard2__VariantsArgs;
  args: PlasmicPriceCard2__ArgsType;
  overrides: PlasmicPriceCard2__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "primary",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.primary
      },
      {
        path: "borders",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.borders
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsdGkOhQb3JToV()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootborders_flatCenter]: hasVariant(
            $state,
            "borders",
            "flatCenter"
          ),
          [sty.rootborders_flatLeft]: hasVariant($state, "borders", "flatLeft"),
          [sty.rootborders_flatRight]: hasVariant(
            $state,
            "borders",
            "flatRight"
          ),
          [sty.rootprimary]: hasVariant($state, "primary", "primary")
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxborders_flatCenter]: hasVariant(
            $state,
            "borders",
            "flatCenter"
          ),
          [sty.freeBoxborders_flatLeft]: hasVariant(
            $state,
            "borders",
            "flatLeft"
          ),
          [sty.freeBoxborders_flatRight]: hasVariant(
            $state,
            "borders",
            "flatRight"
          ),
          [sty.freeBoxprimary]: hasVariant($state, "primary", "primary")
        })}
      >
        <h4
          data-plasmic-name={"h4"}
          data-plasmic-override={overrides.h4}
          className={classNames(
            projectcss.all,
            projectcss.h4,
            projectcss.__wab_text,
            sty.h4,
            {
              [sty.h4borders_flatCenter]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.h4borders_flatLeft]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.h4borders_flatRight]: hasVariant(
                $state,
                "borders",
                "flatRight"
              )
            }
          )}
        >
          {hasVariant($state, "borders", "flatRight")
            ? "Enterprise"
            : hasVariant($state, "borders", "flatLeft")
            ? "Free"
            : "Pro"}
        </h4>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__gcBnJ,
            {
              [sty.textborders_flatCenter__gcBnJfLoOn]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.textborders_flatLeft__gcBnJedlyf]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.textborders_flatRight__gcBnJmxluE]: hasVariant(
                $state,
                "borders",
                "flatRight"
              ),
              [sty.textprimary__gcBnJbBrZk]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            }
          )}
        >
          {hasVariant($state, "borders", "flatRight")
            ? "Flexible power and security"
            : hasVariant($state, "borders", "flatLeft")
            ? "A complete analytics platform."
            : "A complete analytics platform."}
        </div>
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__tuHxF)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          loading={"lazy"}
          src={{
            src: "/plasmic/dark_saa_s_landing_page/images/linePricingPng.png",
            fullWidth: 300,
            fullHeight: 2,
            aspectRatio: undefined
          }}
        />

        <div
          className={classNames(projectcss.all, sty.columns__xcQyl, {
            [sty.columnsprimary__xcQylBBrZk]: hasVariant(
              $state,
              "primary",
              "primary"
            )
          })}
        >
          <div className={classNames(projectcss.all, sty.column__wEb8)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__cjLyu, {
                [sty.imgborders_flatLeft__cjLyuEdlyf]: hasVariant(
                  $state,
                  "borders",
                  "flatLeft"
                )
              })}
              displayHeight={"24px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"24px"}
              loading={"lazy"}
              src={
                hasVariant($state, "borders", "flatLeft")
                  ? {
                      src: "/plasmic/dark_saa_s_landing_page/images/checklistPricingWhitePng.png",
                      fullWidth: 38,
                      fullHeight: 39,
                      aspectRatio: undefined
                    }
                  : {
                      src: "/plasmic/dark_saa_s_landing_page/images/checklistPng.png",
                      fullWidth: 48,
                      fullHeight: 48,
                      aspectRatio: undefined
                    }
              }
            />
          </div>
          <div
            className={classNames(projectcss.all, sty.column__nJEJ, {
              [sty.columnborders_flatRight__nJEJmxluE]: hasVariant(
                $state,
                "borders",
                "flatRight"
              )
            })}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zuV0K,
                {
                  [sty.textborders_flatLeft__zuV0Kedlyf]: hasVariant(
                    $state,
                    "borders",
                    "flatLeft"
                  ),
                  [sty.textborders_flatRight__zuV0KmxluE]: hasVariant(
                    $state,
                    "borders",
                    "flatRight"
                  ),
                  [sty.textprimary__zuV0KbBrZk]: hasVariant(
                    $state,
                    "primary",
                    "primary"
                  )
                }
              )}
            >
              {hasVariant($state, "borders", "flatRight")
                ? "Everything in pro"
                : hasVariant($state, "borders", "flatLeft")
                ? "1 Product"
                : "Up to 10 projects"}
            </div>
          </div>
        </div>
        <div
          className={classNames(projectcss.all, sty.columns__styIg, {
            [sty.columnsborders_flatCenter__styIgfLoOn]: hasVariant(
              $state,
              "borders",
              "flatCenter"
            ),
            [sty.columnsborders_flatLeft__styIgedlyf]: hasVariant(
              $state,
              "borders",
              "flatLeft"
            ),
            [sty.columnsborders_flatRight__styIGmxluE]: hasVariant(
              $state,
              "borders",
              "flatRight"
            ),
            [sty.columnsprimary__styIgbBrZk]: hasVariant(
              $state,
              "primary",
              "primary"
            )
          })}
        >
          <div className={classNames(projectcss.all, sty.column__gUt7)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__sWaGz, {
                [sty.imgborders_flatLeft__sWaGzEdlyf]: hasVariant(
                  $state,
                  "borders",
                  "flatLeft"
                )
              })}
              displayHeight={"24px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"24px"}
              loading={"lazy"}
              src={
                hasVariant($state, "borders", "flatLeft")
                  ? {
                      src: "/plasmic/dark_saa_s_landing_page/images/checklistPricingWhitePng.png",
                      fullWidth: 38,
                      fullHeight: 39,
                      aspectRatio: undefined
                    }
                  : {
                      src: "/plasmic/dark_saa_s_landing_page/images/checklistPng.png",
                      fullWidth: 48,
                      fullHeight: 48,
                      aspectRatio: undefined
                    }
              }
            />
          </div>
          <div className={classNames(projectcss.all, sty.column__pXw75)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__nMxLu,
                {
                  [sty.textborders_flatCenter__nMxLuFLoOn]: hasVariant(
                    $state,
                    "borders",
                    "flatCenter"
                  ),
                  [sty.textborders_flatLeft__nMxLuEdlyf]: hasVariant(
                    $state,
                    "borders",
                    "flatLeft"
                  ),
                  [sty.textborders_flatRight__nMxLumxluE]: hasVariant(
                    $state,
                    "borders",
                    "flatRight"
                  ),
                  [sty.textprimary__nMxLuBBrZk]: hasVariant(
                    $state,
                    "primary",
                    "primary"
                  )
                }
              )}
            >
              {hasVariant($state, "borders", "flatRight")
                ? "Volume discount"
                : hasVariant($state, "borders", "flatLeft")
                ? "Analytics board"
                : hasVariant($state, "primary", "primary")
                ? "Analytics board"
                : "Up to 10 projects"}
            </div>
          </div>
        </div>
        <div
          className={classNames(projectcss.all, sty.columns___5R1ZH, {
            [sty.columnsborders_flatCenter___5R1ZHfLoOn]: hasVariant(
              $state,
              "borders",
              "flatCenter"
            ),
            [sty.columnsborders_flatLeft___5R1ZHedlyf]: hasVariant(
              $state,
              "borders",
              "flatLeft"
            ),
            [sty.columnsprimary___5R1ZHbBrZk]: hasVariant(
              $state,
              "primary",
              "primary"
            )
          })}
        >
          <div className={classNames(projectcss.all, sty.column__a0D16)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__yyc7U, {
                [sty.imgborders_flatLeft__yyc7UEdlyf]: hasVariant(
                  $state,
                  "borders",
                  "flatLeft"
                )
              })}
              displayHeight={"24px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"24px"}
              loading={"lazy"}
              src={
                hasVariant($state, "borders", "flatLeft")
                  ? {
                      src: "/plasmic/dark_saa_s_landing_page/images/checklistPricingWhitePng.png",
                      fullWidth: 38,
                      fullHeight: 39,
                      aspectRatio: undefined
                    }
                  : {
                      src: "/plasmic/dark_saa_s_landing_page/images/checklistPng.png",
                      fullWidth: 48,
                      fullHeight: 48,
                      aspectRatio: undefined
                    }
              }
            />
          </div>
          <div
            className={classNames(projectcss.all, sty.column__bi0BV, {
              [sty.columnborders_flatLeft__bi0BVedlyf]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.columnborders_flatRight__bi0BVmxluE]: hasVariant(
                $state,
                "borders",
                "flatRight"
              ),
              [sty.columnprimary__bi0BVbBrZk]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__axQsR,
                {
                  [sty.textborders_flatLeft__axQsRedlyf]: hasVariant(
                    $state,
                    "borders",
                    "flatLeft"
                  ),
                  [sty.textprimary__axQsRbBrZk]: hasVariant(
                    $state,
                    "primary",
                    "primary"
                  )
                }
              )}
            >
              {hasVariant($state, "borders", "flatLeft")
                ? "Insights panel"
                : hasVariant($state, "primary", "primary")
                ? "Analytics board"
                : "Up to 10 projects"}
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.column__ov37, {
              [sty.columnborders_flatLeft__ov37Edlyf]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.columnborders_flatRight__ov37MxluE]: hasVariant(
                $state,
                "borders",
                "flatRight"
              ),
              [sty.columnprimary__ov37BBrZk]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          />
        </div>
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "borders", "flatLeft")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : hasVariant(globalVariants, "screen", "mobileOnly")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__huu8, {
              [sty.columnsborders_flatCenter__huu8FLoOn]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsborders_flatLeft__huu8Edlyf]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.columnsprimary__huu8BBrZk]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__v0Yk3)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__rd0RS, {
                  [sty.imgborders_flatLeft__rd0RSedlyf]: hasVariant(
                    $state,
                    "borders",
                    "flatLeft"
                  )
                })}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"24px"}
                loading={"lazy"}
                src={
                  hasVariant($state, "borders", "flatLeft")
                    ? {
                        src: "/plasmic/dark_saa_s_landing_page/images/checklistPricingWhitePng.png",
                        fullWidth: 38,
                        fullHeight: 39,
                        aspectRatio: undefined
                      }
                    : {
                        src: "/plasmic/dark_saa_s_landing_page/images/checklistPng.png",
                        fullWidth: 48,
                        fullHeight: 48,
                        aspectRatio: undefined
                      }
                }
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__oGrsK)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ueDaV,
                  {
                    [sty.textborders_flatLeft__ueDaVedlyf]: hasVariant(
                      $state,
                      "borders",
                      "flatLeft"
                    ),
                    [sty.textprimary__ueDaVbBrZk]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {hasVariant($state, "borders", "flatLeft")
                  ? "CLI access"
                  : hasVariant($state, "primary", "primary")
                  ? "Analytics board"
                  : "Up to 10 projects"}
              </div>
            </div>
          </div>
        ) : null}
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__zi4I, {
              [sty.columnsborders_flatCenter__zi4IfLoOn]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsprimary__zi4IbBrZk]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column___3856)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__rdah2)}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"24px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/dark_saa_s_landing_page/images/checklistPng.png",
                  fullWidth: 48,
                  fullHeight: 48,
                  aspectRatio: undefined
                }}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column___3FoBc)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lQVwZ,
                  {
                    [sty.textborders_flatCenter__lQVwZfLoOn]: hasVariant(
                      $state,
                      "borders",
                      "flatCenter"
                    ),
                    [sty.textprimary__lQVwZbBrZk]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {"Insights panel"}
              </div>
            </div>
          </div>
        ) : null}
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__fd6P2, {
              [sty.columnsborders_flatCenter__fd6P2FLoOn]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsprimary__fd6P2BBrZk]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__emJj)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img___71MFs)}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "16px"
                    : "24px"
                }
                loading={"lazy"}
                src={{
                  src: "/plasmic/dark_saa_s_landing_page/images/checklistPng.png",
                  fullWidth: 48,
                  fullHeight: 48,
                  aspectRatio: undefined
                }}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__mcSgh)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xlIYx,
                  {
                    [sty.textprimary__xlIYxBBrZk]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {"CLI access"}
              </div>
            </div>
          </div>
        ) : null}
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__obOrj, {
              [sty.columnsborders_flatCenter__obOrjFLoOn]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsprimary__obOrjBBrZk]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column___61Gu)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__fkGLc)}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"24px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/dark_saa_s_landing_page/images/checklistPng.png",
                  fullWidth: 48,
                  fullHeight: 48,
                  aspectRatio: undefined
                }}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__xNne)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jFcjB,
                  {
                    [sty.textprimary__jFcjBbBrZk]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {"Automation features"}
              </div>
            </div>
          </div>
        ) : null}
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__k6ECe, {
              [sty.columnsborders_flatCenter__k6ECeFLoOn]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsprimary__k6ECeBBrZk]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__pLe78)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__xUNjb)}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"24px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/dark_saa_s_landing_page/images/checklistPng.png",
                  fullWidth: 48,
                  fullHeight: 48,
                  aspectRatio: undefined
                }}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__lyRLd)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__js2,
                  {
                    [sty.textprimary__js2BBrZk]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {"Team features"}
              </div>
            </div>
          </div>
        ) : null}
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__rkz6Y)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          loading={"lazy"}
          src={{
            src: "/plasmic/dark_saa_s_landing_page/images/linePricingPng.png",
            fullWidth: 300,
            fullHeight: 2,
            aspectRatio: undefined
          }}
        />

        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "borders", "flatRight")
            ? true
            : hasVariant($state, "borders", "flatLeft")
            ? true
            : false
        ) ? (
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___02Ji3,
              {
                [sty.textborders_flatCenter___02Ji3FLoOn]: hasVariant(
                  $state,
                  "borders",
                  "flatCenter"
                ),
                [sty.textborders_flatLeft___02Ji3Edlyf]: hasVariant(
                  $state,
                  "borders",
                  "flatLeft"
                ),
                [sty.textborders_flatRight___02Ji3MxluE]: hasVariant(
                  $state,
                  "borders",
                  "flatRight"
                )
              }
            )}
          >
            {hasVariant($state, "borders", "flatCenter")
              ? "$ 50"
              : hasVariant($state, "borders", "flatRight")
              ? "$ 800"
              : "$ 0"}
          </div>
        ) : null}
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__dwsyC,
            {
              [sty.textborders_flatCenter__dwsyCfLoOn]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.textborders_flatLeft__dwsyCedlyf]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.textborders_flatRight__dwsyCmxluE]: hasVariant(
                $state,
                "borders",
                "flatRight"
              )
            }
          )}
        >
          {hasVariant($state, "borders", "flatRight")
            ? "Starting price, customizable"
            : hasVariant($state, "borders", "flatLeft")
            ? "Free Forever"
            : "per project/month"}
        </div>
        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames("__wab_instance", sty.button, {
            [sty.buttonborders_flatCenter]: hasVariant(
              $state,
              "borders",
              "flatCenter"
            ),
            [sty.buttonborders_flatLeft]: hasVariant(
              $state,
              "borders",
              "flatLeft"
            ),
            [sty.buttonborders_flatRight]: hasVariant(
              $state,
              "borders",
              "flatRight"
            ),
            [sty.buttonprimary]: hasVariant($state, "primary", "primary")
          })}
          color={hasVariant($state, "borders", "flatLeft") ? "white" : "blue"}
          endIcon={
            <svg
              className={classNames(projectcss.all, sty.svg__x0P9)}
              role={"img"}
            />
          }
          link={"#"}
          startIcon={
            <svg
              className={classNames(projectcss.all, sty.svg__y0VB)}
              role={"img"}
            />
          }
          submitsForm={true}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__rXf1G,
              {
                [sty.textborders_flatCenter__rXf1GFLoOn]: hasVariant(
                  $state,
                  "borders",
                  "flatCenter"
                ),
                [sty.textborders_flatLeft__rXf1GEdlyf]: hasVariant(
                  $state,
                  "borders",
                  "flatLeft"
                ),
                [sty.textborders_flatRight__rXf1GmxluE]: hasVariant(
                  $state,
                  "borders",
                  "flatRight"
                )
              }
            )}
          >
            {hasVariant($state, "borders", "flatCenter")
              ? "Go Become pro"
              : hasVariant($state, "borders", "flatRight")
              ? "Everything is yours"
              : hasVariant($state, "borders", "flatLeft")
              ? "Claim Free"
              : "Go Become pro"}
          </div>
        </Button>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "h4", "button"],
  freeBox: ["freeBox", "h4", "button"],
  h4: ["h4"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  h4: "h4";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPriceCard2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPriceCard2__VariantsArgs;
    args?: PlasmicPriceCard2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPriceCard2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPriceCard2__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPriceCard2__ArgProps,
          internalVariantPropNames: PlasmicPriceCard2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPriceCard2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPriceCard2";
  } else {
    func.displayName = `PlasmicPriceCard2.${nodeName}`;
  }
  return func;
}

export const PlasmicPriceCard2 = Object.assign(
  // Top-level PlasmicPriceCard2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    h4: makeNodeComponent("h4"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicPriceCard2
    internalVariantProps: PlasmicPriceCard2__VariantProps,
    internalArgProps: PlasmicPriceCard2__ArgProps
  }
);

export default PlasmicPriceCard2;
/* prettier-ignore-end */
