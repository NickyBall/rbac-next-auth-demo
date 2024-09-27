"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function withRole(
  WrappedComponent: React.ComponentType,
  allowedRoles: string[]
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function WithRole(props: any) {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
      return <p>Loading...</p>;
    }

    if (!session || !allowedRoles.includes(session.user.role)) {
      router.push("/unauthorized");
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}
