import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";
import { Table } from "../Table/Table";

export const OTPReveal = () => {
  const [comms, setComms] = useState([]);
  const supabase = useSupabaseClient();
  useEffect(() => {
    supabase
      .channel("comms_logs")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "comms_logs",
        },
        (payload) => {
          setComms((comms) => [payload.new, ...comms]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(supabase.channel("comms_logs"));
    };
  }, [supabase, comms]);

  const headings = ["#", "Service Name", "External Ref", "SMS To", "OTP"];

  return (
    <div className="mt-3">
      <Table align="left">
        <Table.Head>
          <Table.TR>
            {headings.map((heading, index) => (
              <Table.TH key={index}>{heading}</Table.TH>
            ))}
          </Table.TR>
        </Table.Head>
        <Table.Body>
          {comms?.length > 0 &&
            comms?.map((comm, idx) => (
              <Table.TR key={idx}>
                <Table.TD>
                  <span className="pl-1">{idx + 1}</span>
                </Table.TD>
                <Table.TD>{comm.service_name}</Table.TD>
                <Table.TD>{comm.external_ref}</Table.TD>
                <Table.TD>{comm.sms_to}</Table.TD>
                <Table.TD>{comm.msg_content.values.variables}</Table.TD>
              </Table.TR>
            ))}
        </Table.Body>
      </Table>
    </div>

    // <div>
    //   <p>here</p>
    //   {comms.map((comm, index) => (
    //     <p key={index}>{JSON.stringify(comm.msg_content.values.variables)}</p>
    //   ))}
    // </div>
  );
};
