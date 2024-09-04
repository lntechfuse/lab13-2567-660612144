import { footerProps } from "@lib/types";

export default function Footer(params:footerProps) {
  return (
    <div className="mt-3">
      <hr />
      <p className="text-secondary text-center">Copyright © {params.year} {params.fullName} {params.studentId}</p>
    </div>
  );
}
