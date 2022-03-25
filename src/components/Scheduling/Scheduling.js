import SchedulingProvider from "../../store/SchedulingProvider";
import styles from "./Scheduling.module.css";
import SchedulingMessages from "./SchedulingMessages";
import SchedulingFormV2 from "./SchedulingFormV2";
import SchedulingForm from "./SchedulingForm";
import SchedulingHeader from "./SchedulingHeader";
import SchedulingSidebar from "./SchedulingSidebar";

const Scheduling = () => {
  return (
    <div className="container">
      <div className={styles.scheduling}>
        <SchedulingHeader />
        <section className={styles["scheduling__content"]}>
          <section className={styles["scheduling__messages-form"]}>
            <SchedulingProvider>
              <SchedulingMessages />
              {/* <SchedulingFormV2 /> */}
              <SchedulingForm />
            </SchedulingProvider>
          </section>
          <SchedulingSidebar />
        </section>
      </div>
    </div>
  );
};

export default Scheduling;
