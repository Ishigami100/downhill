export default function Container({ children, large = false }) {
  return <div className={large ? style.large : styles.default}>{children}</div>;
}
