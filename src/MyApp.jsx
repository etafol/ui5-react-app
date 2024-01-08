import { useState } from "react";
import {
  Avatar,
  Card,
  CardHeader,
  Text,
  ShellBar,
  ShellBarItem,
  List,
  StandardListItem,
  CustomListItem,
  ValueState,
  ProgressIndicator,
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  FlexBoxDirection,
  AnalyticalTable,
  Icon,
} from "@ui5/webcomponents-react";
import { spacing, ThemingParameters } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import lineChartIcon from "@ui5/webcomponents-icons/dist/line-chart";
import barChartIcon from "@ui5/webcomponents-icons/dist/horizontal-bar-chart";
import addIcon from "@ui5/webcomponents-icons/dist/add";
import listIcon from "@ui5/webcomponents-icons/dist/list";

const dataset = [
  {
    month: "January",
    data: 65,
  },
  {
    month: "February",
    data: 59,
  },
  {
    month: "March",
    data: 80,
  },
  {
    month: "April",
    data: 81,
  },
  {
    month: "May",
    data: 56,
  },
  {
    month: "June",
    data: 55,
  },
  {
    month: "July",
    data: 40,
  },
];

export function MyApp() {
  const [toggleCharts, setToggleCharts] = useState("lineChart");
  const [loading, setLoading] = useState(false);

  const handleHeaderClick = () => {
    // alert("Header clicked");
    if (toggleCharts === "lineChart") {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts("barChart");
      }, 2000);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts("lineChart");
      }, 2000);
    }
  };

  const contentTitle =
    toggleCharts === "lineChart" ? "Line Chart" : "Bar Chart";
  const switchToChart =
    toggleCharts === "lineChart" ? "Bar Chart" : "Line Chart";

  return (
    <div>
      <ShellBar
        logo={<img src="reactLogo.png" alt="Logo" />}
        profile={
          <Avatar>
            <img src="profilePictureExample.png" alt="Profile" />
          </Avatar>
        }
        primaryTitle="My App"
      >
        <ShellBarItem icon={addIcon} text="Add" />
      </ShellBar>
      <Card
        header={
          <CardHeader
            titleText="Stock Prices"
            subtitleText={`Click here to switch to ${switchToChart}`}
            interactive
            onClick={handleHeaderClick}
            avatar={
              <Icon
                name={
                  toggleCharts === "lineChart" ? lineChartIcon : barChartIcon
                }
              />
            }
          />
        }
        style={{ width: "300px" }}
      >
        <Text style={spacing.sapUiContentPadding}>{contentTitle}</Text>
        {toggleCharts === "lineChart" ? (
          <LineChart
            measures={[{ accessor: "data", label: "Stock Price" }]}
            dimensions={[{ accessor: "month" }]}
            dataset={dataset}
            loading={loading}
          />
        ) : (
          <BarChart
            dir="vertical"
            measures={[{ accessor: "data", label: "Stock Price" }]}
            dimensions={[{ accessor: "month" }]}
            dataset={dataset}
            loading={loading}
          />
        )}
      </Card>
      <Card
        header={
          <CardHeader
            titleText="Progress"
            subtitleText="List"
            avatar={<Icon name={listIcon} />}
          />
        }
        style={{ width: "300px" }}
      >
        <List>
          <StandardListItem
            additionalText="finished"
            additionalTextState={ValueState.Success}
          >
            Activity 1
          </StandardListItem>
          <StandardListItem
            additionalText="failed"
            additionalTextState={ValueState.Error}
          >
            Activity 2
          </StandardListItem>
          <CustomListItem>
            <FlexBox
              direction={FlexBoxDirection.Column}
              style={{ width: "100%", ...spacing.sapUiContentPadding }}
            >
              <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
                <Text style={{ fontSize: ThemingParameters.sapFontLargeSize }}>
                  Activity 3
                </Text>
                <Text style={{ color: ThemingParameters.sapCriticalTextColor }}>
                  in progress
                </Text>
              </FlexBox>
              <ProgressIndicator
                value={89}
                valueState={ValueState.Success}
                style={{ ...spacing.sapUiTinyMarginTop }}
              />
            </FlexBox>
          </CustomListItem>
          <CustomListItem>
            <FlexBox
              direction={FlexBoxDirection.Column}
              style={{ width: "100%", ...spacing.sapUiContentPadding }}
            >
              <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
                <Text style={{ fontSize: ThemingParameters.sapFontLargeSize }}>
                  Activity 4
                </Text>
                <Text style={{ color: ThemingParameters.sapCriticalTextColor }}>
                  in progress
                </Text>
              </FlexBox>
              <ProgressIndicator
                value={5}
                valueState={ValueState.Error}
                style={{ ...spacing.sapUiTinyMarginTop }}
              />
            </FlexBox>
          </CustomListItem>
          {/* <CustomListItem>
            <ProgressIndicator value={5} valueState={ValueState.Error} />
          </CustomListItem> */}
        </List>
      </Card>
    </div>
  );
}
