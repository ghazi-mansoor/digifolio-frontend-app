import SignedInNavbar from "@/app/shared/components/navigation/signed-in-navbar";
import Footer from "@/app/shared/components/layout/footer";

const article = {
    title: 'Boost your conversion rate through colors',
    author: {
        name: 'Farwa Saleem',
        role: 'Interaction Designer',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    paragraphs: [
        "Wait, isn’t color on a website just used for aesthetics? No. Color is used for so much more than the attractiveness of a website.",
        "Research shows that color is crucial in shaping customers’ perceptions of a brand. That’s why some of the most successful companies put in a lot of effort to find the right colors to represent their brand. It keeps its branding consistent everywhere, especially in its communication channels",
        "So, how exactly can you use color for conversion optimization on your site and increase sales? Let's take a closer look.",
        "Colors help shape a brand’s perception. One study even showed that colors evoke and elevate people’s emotions. What’s more, most people closely associate memories and experiences with specific colors. So, choosing the right colors will ensure your brand remains at the forefront of your customers’ minds.",
        "Take, for example, someone who grows up in a happy family home with orange walls, whose favorite restaurant has orange chairs, and who’s won every soccer game in an orange jersey. Because of these memories, this person will associate joy and success with the color orange."
    ]
}

export default function BlogArticle() {
    return (
      <div className="flex flex-col w-full min-h-full space-y-14">
          <SignedInNavbar />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <a href="/blog" className="text-sm font-semibold leading-6 text-gray-900">
                  <span aria-hidden="true">&larr;</span> Back to Blog
              </a>
              <article className="prose lg:prose-lg mx-w-lg mt-8">
                  <p className="text-base font-semibold leading-7 text-indigo-600">{article.author.name}</p>
                  <h1>{article.title}</h1>
                  {
                      article.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
                  }
              </article>
          </div>
          <Footer />
      </div>
    );
}
