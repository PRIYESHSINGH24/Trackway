const Blog = () => {
    return (
        <div className="min-h-screen mt-16 text-white flex flex-col items-center px-4 sm:px-8 lg:px-20 py-16 font-sans">
            {/* Header */}
            <h1 className="text-6xl sm:text-5xl md:text-7xl font-font1 mb-4">Blog</h1>
            <p className="text-center max-w-[320px] mb-16 text-base sm:text-lg">
                Product updates, insights, and behind-the-scenes from the Harvey team.
            </p>

            <div className="flex flex-col gap-20 w-full">
                {/* Blog Feature Section */}
                <div className="flex flex-col lg:flex-row gap-16 w-full max-w-6xl mx-auto">
                    {/* Left Card */}
                    <div className="bg-[#dddbd1] rounded-md p-6 flex gap-6 w-full lg:h-[380px] lg:w-2/3">
                        {/* Text */}
                        <div className="flex flex-col justify-between w-full lg:w-[65%]">
                            <h2 className="text-[#524F49] text-2xl sm:text-3xl leading-snug">
                                Security by Design:{" "}
                                <p className="text-[#706D5E]">
                                    How Harvey Engineered Trust from Day One
                                </p>
                            </h2>
                            <p className="mt-10 text-[#524F49] font-font1 text-3xl">Harvey</p>
                        </div>

                        {/* Image */}
                        <div className="w-full lg:w-[35%]">
                            <img
                                src="https://images.unsplash.com/photo-1521119989659-a83eee488004?w=900&auto=format&fit=crop&q=60"
                                alt="Architecture"
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                    </div>

                    {/* Right Text Content */}
                    <div className="flex flex-col justify-center w-full lg:w-1/2 px-2 lg:px-0">
                        <h3 className="sm:text-2xl text-xl/4 md:text-4xl/9 font-font1 text-white mb-4 leading-snug">
                            Security by Design: How Harvey Engineered Trust from Day One
                        </h3>
                        <div className="flex items-center gap-2">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="author"
                                className="w-6 h-6 rounded-full"
                            />
                            <img
                                src="https://randomuser.me/api/portraits/men/33.jpg"
                                alt="author"
                                className="w-6 h-6 rounded-full"
                            />
                            <span className="ml-2 text-sm text-gray-400">Multiple Authors</span>
                        </div>
                    </div>
                </div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 w-full max-w-7xl px-4 md:px-8">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                        <BlogCard key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const BlogCard = () => {
    return (
        <div className="w-full flex flex-col items-center font-sans">
            {/* Card Container */}
            <div className="bg-[#1F1D1B] rounded-md w-full h-[200px] flex flex-row overflow-hidden">
                {/* Text Section */}
                <div className="p-6 w-2/3 flex flex-col justify-between">
                    <h2 className="text-md font-light mb-6">
                        Scaling AI Evaluation <br /> Through Expertise
                    </h2>
                    <p className="text-lg text-white font-light">Harvey</p>
                </div>

                {/* Image Section */}
                <div className="w-1/3 p-4">
                    <img
                        src="https://images.unsplash.com/photo-1560347876-aeef00ee58a1"
                        alt="architecture"
                        className="h-full w-full object-cover rounded-md"
                    />
                </div>
            </div>

            {/* Footer */}
            <div className="w-full mt-4 px-2 sm:px-0">
                <h3 className="text-xl sm:text-2xl font-medium mb-2">
                    Scaling AI Evaluation Through Expertise
                </h3>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center font-bold">
                        H
                    </div>
                    <span>Harvey Team</span>
                </div>
            </div>
        </div>
    );
};

export default Blog;
