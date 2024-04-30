// import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex bg-[rgb(235,255,116)]  py-16 rounded-3xl  px-8">
        <div className="flex flex-col gap-8 w-[70vw] ">
          <h2 className="text-[4rem]  font-bold text-slate-800">
            Providing the fastest <br /> online transactions
          </h2>
          <p className="text-slate-800 ">
            Experience the unparalleled speed and efficiency of our online
            transaction platform. <br /> With our state-of-the-art technology.
          </p>
          <div className="flex  gap-4">
            <span>
              <p className="text-slate-800">Expert financial guidance</p>
            </span>
            <span>
              <p className="text-slate-800">24/7 Client support</p>
            </span>
          </div>
          <div className="flex gap-4">
            <button className="bg-[rgb(0,49,62)] hover:bg-[rgba(0,49,62,0.83)] py-2 px-4 text-gray-200 rounded-3xl">
              Get Started
            </button>
            <button className="flex bg-gray-100 hover:bg-transparent  border border-black py-2 px-4 gap-2 text-slate-800 rounded-3xl">
              Learn More
              {/* <ArrowRight /> */}
            </button>
          </div>
        </div>
        <div className="flex w-[35vw] relative">
          <div className="">
            <Image
              src="/images/totalspending.jpg"
              alt=""
              width={1080}
              height={1080}
              className="w-auto h-24 -right-12 top-3 object-cover absolute rounded-2xl"
            />
          </div>
          <Image
            src="/images/lady.jpg"
            alt=""
            width={1080}
            height={1080}
            className="object-cover w-full h-auto rounded-3xl "
          />
          <div className="">
            <Image
              src="/images/graph.jpg"
              alt=""
              width={1080}
              height={1080}
              className="w-60 rounded-3xl -left-32 bottom-14 h-auto absolute object-cover"
            />
          </div>
        </div>
      </div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, amet
        adipisci atque animi nihil voluptas illum dignissimos distinctio
        reprehenderit iure dolores sunt fuga laboriosam error velit. Provident,
        excepturi. Distinctio iste debitis amet facere quia repudiandae sapiente
        autem deleniti eaque neque consequuntur ex esse, expedita aspernatur,
        dignissimos dolorem placeat sunt. Dignissimos culpa illum pariatur esse
        mollitia eum magni animi porro nesciunt consequatur veniam accusantium,
        est fugiat laborum explicabo sint, blanditiis ea deleniti placeat quas
        hic sit possimus provident autem. Eius veritatis quidem, molestiae error
        inventore consectetur tempora laudantium vero facilis excepturi alias
        laboriosam deleniti ducimus, voluptatibus odio accusamus nemo. Quis iste
        mollitia modi blanditiis in ratione ea corrupti sunt dolore illum
        corporis hic pariatur, aut nesciunt autem odit reprehenderit voluptas
        quo! Cum soluta omnis ut, ipsa at, ea veritatis a quod saepe, deserunt
        aliquam ipsum. Molestiae iure quaerat enim exercitationem?
        Necessitatibus, minima rerum atque provident aut quod voluptate vitae
        repellendus nulla, cupiditate quisquam commodi earum ex aspernatur
        quidem eos. Quam quod quas consequuntur quaerat esse, deleniti pariatur
        debitis facere beatae voluptas eos laudantium repellat? Similique
        debitis nulla saepe fugiat recusandae minima architecto consequatur
        pariatur et asperiores, porro, totam amet quia sit sapiente, numquam
        tenetur? Velit nulla voluptatibus quaerat, expedita neque aliquid quidem
        beatae ullam eius natus sequi molestias praesentium dolorem corporis
        amet eum corrupti minus impedit placeat. At veritatis, delectus
        praesentium vel architecto minima reiciendis perspiciatis dolore veniam
        dolor, numquam tempora beatae, est facilis sunt. Beatae quibusdam
        repudiandae deserunt quisquam autem voluptas ratione. Minima tempora
        voluptas repellendus adipisci numquam eligendi consectetur vero
        doloribus sit aspernatur maxime exercitationem officia laudantium ipsum,
        labore, inventore, repudiandae fugit cumque iure sapiente ipsa corrupti
        culpa! Neque cumque sequi modi voluptatum laborum aspernatur suscipit
        qui cum repellat laboriosam harum ab necessitatibus iure debitis
        consequatur quis recusandae commodi repudiandae beatae laudantium dolor
        corrupti adipisci, obcaecati libero. Magnam, debitis facere quibusdam
        sit amet commodi doloremque culpa saepe quis. Sint, ea totam facere
        neque rerum autem temporibus minus nisi hic laborum? Accusantium ullam
        voluptate, labore voluptas nostrum possimus, ipsum repellat quod sunt
        dolore molestiae reprehenderit impedit consectetur recusandae placeat
        iure, reiciendis fugit adipisci cum eveniet laudantium eligendi aliquam.
        Dignissimos nobis, necessitatibus alias saepe velit repudiandae non
        dolores dicta fuga perspiciatis tempore nemo quis tenetur. Commodi
        numquam deserunt sit culpa optio reprehenderit. Ipsam, voluptatibus
        libero voluptas sed ratione modi blanditiis amet, tempora dolorum
        nostrum cupiditate reiciendis dolore iure deleniti ducimus placeat animi
        sit? Consequuntur saepe, recusandae fuga quis cupiditate odio dolore
        facere earum error maiores dolor aperiam aspernatur eos vero obcaecati
        labore explicabo dolores porro debitis doloremque fugit accusantium
        expedita harum? Deserunt dolorem, optio nam delectus veritatis
        voluptates quos quas, aspernatur expedita perspiciatis autem suscipit
        velit blanditiis tenetur quidem? Sed maxime commodi cumque possimus
        dicta totam quis voluptate dolorem blanditiis earum nam iste ullam esse
        minima ut aliquam, excepturi dolorum officiis perspiciatis consectetur
        eveniet doloribus eligendi. Sapiente distinctio laborum voluptates eius
        iste eligendi at dolores rerum quod obcaecati, temporibus ab illo nulla
        nihil similique nobis culpa, ipsam sit iusto dolor. Exercitationem
        officia porro magni ea esse quasi id totam saepe doloremque.
      </div>
    </div>
  );
}

export default page;
