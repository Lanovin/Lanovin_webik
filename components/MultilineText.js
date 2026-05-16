import { Fragment } from "react";

export function MultilineText({ as: Tag = "p", className, text = "" }) {
  const lines = String(text ?? "").split(/\r?\n/);

  return (
    <Tag className={className}>
      {lines.map((line, index) => (
        <Fragment key={`${index}-${line}`}>
          {index > 0 ? <br /> : null}
          {line}
        </Fragment>
      ))}
    </Tag>
  );
}