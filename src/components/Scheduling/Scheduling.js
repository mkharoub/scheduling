import SchedulingProvider from "../../store/SchedulingProvider";
import styles from "./Scheduling.module.css";
import SchedulingContent from "./SchedulingContent";
import SchedulingForm from "./SchedulingForm";
import SchedulingHeader from "./SchedulingHeader";

const Scheduling = () => {
  return (
    <div className="container">
      <div className={styles.scheduling}>
        <SchedulingHeader />
        <SchedulingProvider>
          <SchedulingContent />
          <SchedulingForm />
        </SchedulingProvider>
      </div>
    </div>
  );
};

export default Scheduling;
