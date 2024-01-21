import Image from "next/image";

import { clients } from "@/constants";

export default function Clients() {
  return (
    <main className="flexCenter my-4">
      <div className="flexCenter w-full flex-wrap">
        {clients.map((client, idx) => (
          <div
            key={idx}
            className={`flexCenter m-5 min-w-[120px] flex-1 sm:min-w-[192px]`}
          >
            <Image
              src={client.logo}
              alt="client_logo"
              width={100}
              className="size-auto cursor-pointer object-contain sm:w-[192px]"
              priority
            />
            {/* <Image
              src={client.logo2}
              alt="client_logo"
              width={100}
              className="size-auto cursor-pointer object-contain sm:w-[192px]"
              priority
            /> */}
          </div>
        ))}
      </div>
    </main>
  );
}
