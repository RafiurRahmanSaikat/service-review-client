import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="my-4">
      <section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="mx-auto max-w-xl text-center sm:text-left">
            <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
               A profetional Photographer 
            </h2>

            <p class="hidden text-xl text-black md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>

            <div class="mt-4 md:mt-8">
              <Link
              
                class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>

        <img
          alt="Violin"
          src="https://images.unsplash.com/photo-1490638114763-02630949efda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
        />
      </section>
    </div>
  );
};

export default Hero;