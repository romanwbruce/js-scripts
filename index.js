import { Resend } from "resend";
//re_V6E4LxEP_Ac9BFkLH4LmBALYckXN2taF6
const resend = new Resend("re_V6E4LxEP_Ac9BFkLH4LmBALYckXN2taF6");

const data = await resend.emails.send({
    from: "ScriptScale <onboarding@resend.dev>",
    to: ["romanwbruce@gmail.com"],
    subject: "Hello, Roman!",
    html: "<strong>it works!</strong>",
  });