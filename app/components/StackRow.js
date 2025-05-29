export default function StackRow({
  icon,
  title,
  children,
  classHeader,
  classDescription,
  classLine,
}) {
  return (
    <div className={classHeader}>
      <div className={classDescription}>
        {icon}
        <span>{title}</span>
      </div>
      <hr className={classLine} />
      {children}
    </div>
  );
}
