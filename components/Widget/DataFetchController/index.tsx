import { Switch } from "antd";
import { IDataWidget } from "interfaces";
import { useEffect, useState } from "react";
import DataFetch from "utils/DataFetch";
import styles from "./index.module.css";

export const DataFetchController: IDataWidget = () => {
  const [value, setValue] = useState(DataFetch.status);

  useEffect(() => {
    DataFetch.onStatusChange(setValue);
  }, []);

  return (
    <div>
      <div className={styles.switch}>
        <span className={styles["switch-text"]}>轮询开关</span>
        <Switch
          checked={value}
          onChange={(checked) => {
            if (checked) {
              DataFetch.start();
            } else {
              DataFetch.stop();
            }
          }}
        />
      </div>
    </div>
  );
};
