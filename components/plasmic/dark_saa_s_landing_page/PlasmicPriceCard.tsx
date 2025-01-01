// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 53Xi8PjeNu3UNxbnjUtmHg
// Component: 5BwOrpbCd1kC

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
import sty from "./PlasmicPriceCard.module.css"; // plasmic-import: 5BwOrpbCd1kC/css

createPlasmicElementProxy;

export type PlasmicPriceCard__VariantMembers = {
  primary: "primary";
  borders: "flatLeft" | "flatRight" | "flatCenter";
};
export type PlasmicPriceCard__VariantsArgs = {
  primary?: SingleBooleanChoiceArg<"primary">;
  borders?: MultiChoiceArg<"flatLeft" | "flatRight" | "flatCenter">;
};
type VariantPropType = keyof PlasmicPriceCard__VariantsArgs;
export const PlasmicPriceCard__VariantProps = new Array<VariantPropType>(
  "primary",
  "borders"
);

export type PlasmicPriceCard__ArgsType = {};
type ArgPropType = keyof PlasmicPriceCard__ArgsType;
export const PlasmicPriceCard__ArgProps = new Array<ArgPropType>();

export type PlasmicPriceCard__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  h4?: Flex__<"h4">;
  video?: Flex__<"div">;
  button?: Flex__<typeof Button>;
};

export interface DefaultPriceCardProps {
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

function PlasmicPriceCard__RenderFunc(props: {
  variants: PlasmicPriceCard__VariantsArgs;
  args: PlasmicPriceCard__ArgsType;
  overrides: PlasmicPriceCard__OverridesType;
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
            : "Max"}
        </h4>
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__mxIu9)}
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
          className={classNames(projectcss.all, sty.columns__gaDg8, {
            [sty.columnsprimary__gaDg8Mlwcx]: hasVariant(
              $state,
              "primary",
              "primary"
            )
          })}
        >
          <div className={classNames(projectcss.all, sty.column__kwzs)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__zjloV, {
                [sty.imgborders_flatLeft__zjloVozL96]: hasVariant(
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
            className={classNames(projectcss.all, sty.column__aAqHj, {
              [sty.columnborders_flatRight__aAqHjFcn18]: hasVariant(
                $state,
                "borders",
                "flatRight"
              )
            })}
          >
            <div
              data-plasmic-name={"video"}
              data-plasmic-override={overrides.video}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.video,
                {
                  [sty.videoborders_flatLeft]: hasVariant(
                    $state,
                    "borders",
                    "flatLeft"
                  ),
                  [sty.videoborders_flatRight]: hasVariant(
                    $state,
                    "borders",
                    "flatRight"
                  ),
                  [sty.videoprimary]: hasVariant($state, "primary", "primary")
                }
              )}
            >
              {hasVariant($state, "borders", "flatRight")
                ? "Everything in pro"
                : hasVariant($state, "borders", "flatLeft")
                ? "1 Product"
                : "unlimited video editing"}
            </div>
          </div>
        </div>
        <div
          className={classNames(projectcss.all, sty.columns___7U9VV, {
            [sty.columnsborders_flatCenter___7U9VVPh18P]: hasVariant(
              $state,
              "borders",
              "flatCenter"
            ),
            [sty.columnsborders_flatLeft___7U9VVozL96]: hasVariant(
              $state,
              "borders",
              "flatLeft"
            ),
            [sty.columnsborders_flatRight___7U9VVFcn18]: hasVariant(
              $state,
              "borders",
              "flatRight"
            ),
            [sty.columnsprimary___7U9VVmlwcx]: hasVariant(
              $state,
              "primary",
              "primary"
            )
          })}
        >
          <div className={classNames(projectcss.all, sty.column__xz804)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__reMwG, {
                [sty.imgborders_flatLeft__reMwGozL96]: hasVariant(
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
          <div className={classNames(projectcss.all, sty.column___0VOSt)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zPdS,
                {
                  [sty.textborders_flatCenter__zPdSPh18P]: hasVariant(
                    $state,
                    "borders",
                    "flatCenter"
                  ),
                  [sty.textborders_flatLeft__zPdSOzL96]: hasVariant(
                    $state,
                    "borders",
                    "flatLeft"
                  ),
                  [sty.textborders_flatRight__zPdSFcn18]: hasVariant(
                    $state,
                    "borders",
                    "flatRight"
                  ),
                  [sty.textprimary__zPdSMlwcx]: hasVariant(
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
                : "Generate up to 3 elements per project."}
            </div>
          </div>
        </div>
        <div
          className={classNames(projectcss.all, sty.columns__hnJ84, {
            [sty.columnsborders_flatCenter__hnJ84Ph18P]: hasVariant(
              $state,
              "borders",
              "flatCenter"
            ),
            [sty.columnsborders_flatLeft__hnJ84OzL96]: hasVariant(
              $state,
              "borders",
              "flatLeft"
            ),
            [sty.columnsprimary__hnJ84Mlwcx]: hasVariant(
              $state,
              "primary",
              "primary"
            )
          })}
        >
          <div className={classNames(projectcss.all, sty.column__gh6)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__dtMum, {
                [sty.imgborders_flatLeft__dtMumozL96]: hasVariant(
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
            className={classNames(projectcss.all, sty.column__aaYdw, {
              [sty.columnborders_flatLeft__aaYdWozL96]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.columnborders_flatRight__aaYdwFcn18]: hasVariant(
                $state,
                "borders",
                "flatRight"
              ),
              [sty.columnprimary__aaYdwmlwcx]: hasVariant(
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
                sty.text___7ZNh,
                {
                  [sty.textborders_flatLeft___7ZNhozL96]: hasVariant(
                    $state,
                    "borders",
                    "flatLeft"
                  ),
                  [sty.textprimary___7ZNhMlwcx]: hasVariant(
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
            className={classNames(projectcss.all, sty.column__tuqb, {
              [sty.columnborders_flatLeft__tuqbozL96]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.columnborders_flatRight__tuqbFcn18]: hasVariant(
                $state,
                "borders",
                "flatRight"
              ),
              [sty.columnprimary__tuqbMlwcx]: hasVariant(
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
            className={classNames(projectcss.all, sty.columns___6RYmZ, {
              [sty.columnsborders_flatCenter___6RYmZPh18P]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsborders_flatLeft___6RYmZozL96]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.columnsprimary___6RYmZmlwcx]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__yafc7)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__d2IUv, {
                  [sty.imgborders_flatLeft__d2IUVozL96]: hasVariant(
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
            <div className={classNames(projectcss.all, sty.column__w2SeJ)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__oxPsk,
                  {
                    [sty.textborders_flatLeft__oxPsKozL96]: hasVariant(
                      $state,
                      "borders",
                      "flatLeft"
                    ),
                    [sty.textprimary__oxPskmlwcx]: hasVariant(
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
            className={classNames(projectcss.all, sty.columns__q36Yq, {
              [sty.columnsborders_flatCenter__q36YqPh18P]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsprimary__q36Yqmlwcx]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column___9XSlG)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img___2EKbh)}
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
            <div className={classNames(projectcss.all, sty.column__qVu0J)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__scPx,
                  {
                    [sty.textborders_flatCenter__scPxPh18P]: hasVariant(
                      $state,
                      "borders",
                      "flatCenter"
                    ),
                    [sty.textprimary__scPxMlwcx]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {"Generate up to 50 elements per project."}
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
            className={classNames(projectcss.all, sty.columns___0CcKf, {
              [sty.columnsborders_flatCenter___0CcKfPh18P]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsprimary___0CcKfmlwcx]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__pv8Hu)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img___8Mang)}
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
            <div className={classNames(projectcss.all, sty.column__z0WqR)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__plo0X,
                  {
                    [sty.textprimary__plo0Xmlwcx]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {
                  "Includes animated graphics, custom text effects, and audio effects."
                }
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
            className={classNames(projectcss.all, sty.columns__xyRbr, {
              [sty.columnsborders_flatCenter__xyRbrPh18P]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsprimary__xyRbrmlwcx]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__z8Dfv)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__eErxk)}
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
            <div className={classNames(projectcss.all, sty.column___7Yvdp)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__yNaNb,
                  {
                    [sty.textprimary__yNaNbMlwcx]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {
                  "Access to premium stock assets (videos, images, and soundtracks)."
                }
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
            className={classNames(projectcss.all, sty.columns__rYIz3, {
              [sty.columnsborders_flatCenter__rYIz3Ph18P]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsprimary__rYIz3Mlwcx]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__aCul9)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img___7Ffrq)}
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
            <div className={classNames(projectcss.all, sty.column__x0Psz)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___6S7PJ,
                  {
                    [sty.textprimary___6S7PJmlwcx]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {"Drag-and-drop integration with the editing timeline.\n"}
              </div>
            </div>
          </div>
        ) : null}
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__jDf2I)}
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
              sty.text__f9Mzg,
              {
                [sty.textborders_flatCenter__f9MzgPh18P]: hasVariant(
                  $state,
                  "borders",
                  "flatCenter"
                ),
                [sty.textborders_flatLeft__f9MzgozL96]: hasVariant(
                  $state,
                  "borders",
                  "flatLeft"
                ),
                [sty.textborders_flatRight__f9MzgFcn18]: hasVariant(
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
              : "$0"}
          </div>
        ) : null}
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__ghnL0,
            {
              [sty.textborders_flatCenter__ghnL0Ph18P]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.textborders_flatLeft__ghnL0OzL96]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.textborders_flatRight__ghnL0Fcn18]: hasVariant(
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
            : "/month"}
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
              className={classNames(projectcss.all, sty.svg__mxLqj)}
              role={"img"}
            />
          }
          link={"#"}
          startIcon={
            <svg
              className={classNames(projectcss.all, sty.svg___6IuFk)}
              role={"img"}
            />
          }
          submitsForm={true}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___6I9Fs,
              {
                [sty.textborders_flatCenter___6I9FsPh18P]: hasVariant(
                  $state,
                  "borders",
                  "flatCenter"
                ),
                [sty.textborders_flatLeft___6I9FsozL96]: hasVariant(
                  $state,
                  "borders",
                  "flatLeft"
                ),
                [sty.textborders_flatRight___6I9FsFcn18]: hasVariant(
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
  root: ["root", "freeBox", "h4", "video", "button"],
  freeBox: ["freeBox", "h4", "video", "button"],
  h4: ["h4"],
  video: ["video"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  h4: "h4";
  video: "div";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPriceCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPriceCard__VariantsArgs;
    args?: PlasmicPriceCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPriceCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPriceCard__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
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
          internalArgPropNames: PlasmicPriceCard__ArgProps,
          internalVariantPropNames: PlasmicPriceCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPriceCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPriceCard";
  } else {
    func.displayName = `PlasmicPriceCard.${nodeName}`;
  }
  return func;
}

export const PlasmicPriceCard = Object.assign(
  // Top-level PlasmicPriceCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    h4: makeNodeComponent("h4"),
    video: makeNodeComponent("video"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicPriceCard
    internalVariantProps: PlasmicPriceCard__VariantProps,
    internalArgProps: PlasmicPriceCard__ArgProps
  }
);

export default PlasmicPriceCard;
/* prettier-ignore-end */