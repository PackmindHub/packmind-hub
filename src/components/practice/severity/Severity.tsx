import "./severity.style.css";

export enum SeverityLevels {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH",
    CRITICAL = "CRITICAL"
}

interface SeverityProps {
    severity: SeverityLevels;
}

export const Severity = ({severity}: SeverityProps) => {
    switch (severity) {
        case SeverityLevels.CRITICAL:
            return <span className={'pm-severity pm-severity--critical'}>Critical</span>;
        case SeverityLevels.HIGH:
            return <span className={'pm-severity pm-severity--high'}>High</span>;
        case SeverityLevels.MEDIUM:
            return <span className={'pm-severity pm-severity--medium'}>Medium</span>;
        case SeverityLevels.LOW:
            return <span className={'pm-severity pm-severity--low'}>Low</span>;
        default:
            return null;
    }
}
