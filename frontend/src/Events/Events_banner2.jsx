import React from "react";

const Events_banner2 = () => {
  return (
    <>
      <section className="h-auto max-w-screen-2xl bg-gray-50 p-8">
        <div>
          <h1 className=" text-xl font-bold text-green-600 m-5">Previous Events</h1>
        </div>
        <div className=" grid grid-cols-2 space-y-5 justify-items-center  ">
          <div>
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fthinkbigbig18%2Fposts%2Fpfbid0NWhrMtT7FyUPAnDuy9hqeiawV1ghSL4mQzQ9JqQ4mZbtqdEERN6t5us5oLLQVxbvl&show_text=true&width=500"
              width="500"
              height="500"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
          <div>
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fthinkbigbig18%2Fposts%2Fpfbid02csydh2BMHjfi3cstkWrELhV9x9cHB6A5nvZadeHN4CZAhZcgBNq9RTLWKKUCRwBbl&show_text=true&width=500"
              width="500"
              height="500"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
          <div>
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fthinkbigbig18%2Fvideos%2F391065023950023%2F&show_text=true&width=336&t=0"
              width="336"
              height="500"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events_banner2;
