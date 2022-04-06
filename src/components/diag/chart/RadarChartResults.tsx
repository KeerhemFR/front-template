import React, { useState, useCallback } from 'react';
import {
  ResponsiveContainer,
  RadarChart,
  PolarAngleAxis,
  Radar,
} from 'recharts';

import { renderCustomBarLabelProps } from '~components/diag/DiagResult';

import chartBg from '~assets/images/graphic.png';

import { SRadarChartResults } from '~components/diag/chart/SRadarChartResults';

// --- INTERFACE ---
interface CustomScatterDotProps {
  cx: number;
  cy: number;
  index: number;
  activeDot: number | null;
  onClickHandler(dot: number | null): void;
}

interface RadarChartResultsProps {
  skinDiagResults: {
    subject?: string;
    A?: number;
  }[];
  resultsOk: boolean;
  renderCustomBarLabel: React.FunctionComponent<renderCustomBarLabelProps>;
}

// --- COMPONENTS EXPORTS ---

/**
 * Customization of the spider chart dots
 * @prop {number} cx x-coordinate of center
 * @prop {number} cy y-coordinate of center
 * @prop {index} index index of the dot
 * @prop {number | null} activeDot index of the dot that was clicked
 * @prop {function} onClickHandler handle the event depending on what dot is active
 * @return {React.ReactElement} customize the dots of the spideer charts
 */
export const CustomScatterDot: React.FunctionComponent<CustomScatterDotProps> =
  React.memo(({ cx, cy, index, activeDot, onClickHandler }) => {
    CustomScatterDot.displayName = 'CustomScatterDot';

    return (
      <circle
        onClick={() =>
          activeDot === index ? onClickHandler(null) : onClickHandler(index)
        }
        cx={cx}
        cy={cy}
        r={activeDot === index ? 6 : 4}
        fill="#4A4A4A"
        stroke="#E9E7D2"
        strokeWidth={activeDot === index ? 3 : 1}
        fillOpacity={1}
      />
    );
  });

/**
 * Radar chart module to display the spider chart
 * @prop {{subject: string, A: number}[]} skinDiagResults array of object that store the results of the selfie module
 * @prop {boolean} resultsOk check if we have the selfie's module results or not
 * @prop {React.ReactElement} renderCustomBarLabel component to customize the chart's labels
 * @return {React.ReactElement} Display the spider chart through the recharts module
 */
export const RadarChartResults: React.FunctionComponent<RadarChartResultsProps> =
  React.memo(({ skinDiagResults, resultsOk, renderCustomBarLabel }) => {
    RadarChartResults.displayName = 'RadarChartResults';

    const [activeDot, setActiveDot] = useState<number | null>(null);

    const onClickHandler = useCallback((dot: number | null) => {
      setActiveDot(dot);
      switch (dot) {
        case 0:
          window.YMK.setSkincareResultType('texture');
          break;
        case 1:
          window.YMK.setSkincareResultType('wrinkles');
          break;
        case 2:
          window.YMK.setSkincareResultType('firmness');
          break;
        case 3:
          window.YMK.setSkincareResultType('pore');
          break;
        case 4:
          window.YMK.setSkincareResultType('moisture');
          break;
        case 5:
          window.YMK.setSkincareResultType('radiance');
          break;
        default:
          window.YMK.setSkincareResultType('all');
          break;
      }
    }, []);

    return (
      <SRadarChartResults>
        <div className="chartBg">
          {resultsOk && <img src={chartBg} alt="Chart background" />}
        </div>
        <ResponsiveContainer width={resultsOk ? 550 : 0} height={550}>
          <RadarChart
            data={skinDiagResults}
            outerRadius={155}
            width={550}
            height={550}
          >
            <PolarAngleAxis
              dataKey="subject"
              tick={renderCustomBarLabel as () => React.ReactElement}
            />
            <Radar
              name="Results"
              dataKey="A"
              stroke="#BABABA"
              fill="#EEEEEE"
              fillOpacity={0.4}
              dot={
                <CustomScatterDot
                  onClickHandler={onClickHandler}
                  activeDot={activeDot}
                  cx={0}
                  cy={0}
                  index={0}
                />
              }
            />
          </RadarChart>
        </ResponsiveContainer>
      </SRadarChartResults>
    );
  });
