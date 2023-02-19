import React from 'react'
import './Style/Allstyle.css';
import news_5 from './Images/blog/news-5.jpg';
import news_6 from './Images/blog/news-6.jpg';
import news_7 from './Images/blog/news-7.jpg';
import post_thumb_2 from './Images/blog/post-thumb-2.jpg';
import post_thumb_3 from './Images/blog/post-thumb-3.jpg';
import barner from './Images/blog/barner.jpg';


import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <>
    {/* start header_blog */}
    <section class="page-title">
        <div class="container">
            <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="block">
                <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                    <Link to="/home">Home</Link>
                    </li>
                    <li class="list-inline-item">/</li>
                    <li class="list-inline-item">
                        Blog
                    </li>
                </ul>
                <h1>Blog</h1>
                </div>
            </div>
            </div>
        </div>
    </section>
    {/* end header_blog */}
    <div class="page-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <article class="blog-post-item">
                        <div class="post-thumb">
                        <img src={news_5} alt="" class="img-fluid"/>
                        </div>
                        <div class="post-header mt-4">
                            <div class="post-meta">
                                <span><Link to="" class="post-date">
                                    <i class="fas fa-alarm-clock mr-2"></i>May 9, 2019</Link>
                                </span>
                                <span class="post-tags">
                                    <i class="fas fa-tag mr-2"></i>Tags :
                                    <Link to="">Marketing,</Link>
                                    <Link to="">Wordpress,</Link>
                                    <Link to="">Seo</Link>
                                </span>
                            </div>
                            <h2 class="post-title">
                                <Link to="">How to become a best sale marketer in a month!</Link>
                            </h2>
                        </div>
                        <div class="post-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, 
                                aliquam, aliquid. Eos eum, illo autem unde consequatur, obcaecati quam 
                                voluptatem repellat consequuntur repellendus delectus voluptas 
                                architecto, quos amet hic aliquid!
                            </p>
                            <a href="blog-single.html" class="btn btn-main-2">More Details</a>
                        </div>
                    </article>

                    <article class="blog-post-item">
                        <div class="post-thumb">
                            <img src={news_6} alt="" class="img-fluid"/>
                        </div>
                        <div class="post-header mt-4">
                            <div class="post-meta">
                                <span><Link to="" class="post-date">
                                    <i class="fas fa-alarm-clock mr-2"></i>May 9, 2019</Link>
                                </span>
                                <span class="post-tags">
                                    <i class="fas fa-tag mr-2"></i>Tags :
                                    <Link to="">Marketing,</Link>
                                    <Link to="">Wordpress,</Link>
                                    <Link to="">Seo</Link>
                                </span>
                            </div>
                            <h2 class="post-title"><Link to="">
                                SEO trend to look for the best in 2019
                                </Link>
                            </h2>
                        </div>
                        <div class="post-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, 
                                aliquam, aliquid. Eos eum, illo autem unde consequatur, obcaecati quam 
                                voluptatem repellat consequuntur repellendus delectus voluptas 
                                architecto, quos amet hic aliquid!
                            </p>
                            <Link to="blog" class="btn btn-main-2">More Details</Link>
                        </div>
                    </article>

                    <article class="blog-post-item">
                        <div class="post-thumb">
                            <img src={news_7} alt="" class="img-fluid"/>
                        </div>
                        <div class="post-header mt-4">
                            <div class="post-meta">
                                <span><Link to="" class="post-date">
                                    <i class="fas fa-alarm-clock mr-2"></i>May 9, 2019</Link>
                                </span>
                                <span class="post-tags">
                                    <i class="fas fa-tag mr-2"></i>Tags :
                                    <Link to="">Marketing,</Link>
                                    <Link to="">Wordpress,</Link>
                                    <Link to="">Seo</Link>
                                </span>
                            </div>
                            <h2 class="post-title">
                                <Link to="">How To Make growth With Digital Marketing</Link>
                            </h2>
                        </div>
                        <div class="post-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, 
                                aliquam, aliquid. Eos eum, illo autem unde consequatur, obcaecati quam 
                                voluptatem repellat consequuntur repellendus delectus voluptas 
                                architecto, quos amet hic aliquid!
                            </p>
                            <Link to="" class="btn btn-main-2">More Details</Link>
                        </div>
                    </article>
                    <nav class="post-navigation">
                    <ul class="pagination pagination-lg">
                        <li class="page-item active" aria-current="page">
                        <span class="page-link"> 1 <span class="sr-only">(current)</span>
                        </span>
                        </li>
                        <li class="page-item"><Link class="page-link" to="">2</Link></li>
                        <li class="page-item"><Link class="page-link" to="">3</Link></li>
                    </ul>
                    </nav>
                </div>
                <div class="col-md-4">
                    <div class="sidebar-wrap">
                    <div class="sidebar-widget search p-4 mb-3 border-0">
                        <input type="text" class="form-control" placeholder="search"/>
                        <Link to="" class="btn btn-main d-block mt-2">search</Link>
                    </div>
                    <div class="sidebar-widget latest-post border-0 p-4 mb-3">
                        <h5 class="widget-title">Latest Posts</h5>

                        <div class="media border-bottom py-3">
                            <Link to="/services">
                                <img class="mr-4" src={post_thumb_2} alt=""/>
                            </Link>
                            <div class="media-body">
                                <h6 class="my-2">
                                    <Link to="/services">Thoughtful living in los Angeles</Link>
                                </h6>
                                <span class="text-sm text-muted">Jan 5, 2019</span>
                            </div>
                        </div>

                        <div class="media border-bottom py-3">
                            <Link to="/services">
                                <img class="mr-4" src={post_thumb_3} alt=""/>
                            </Link>
                        <div class="media-body">
                                <h6 class="my-2">
                                    <Link to="/services">How to become a best sale marketer in a month!</Link>
                                </h6>
                                <span class="text-sm text-muted">June 21, 2019</span>
                            </div>
                        </div>

                        <div class="media py-3">
                            <Link to="/services">
                                <img class="mr-4" src={post_thumb_2} alt=""/>
                            </Link>
                            <div class="media-body">
                                <h6 class="my-2">
                                    <Link to="/services">Best marketing strategy to grow</Link>
                                </h6>
                                <span class="text-sm text-muted">Mar 03, 2019</span>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar-widget cat-widget p-4 mb-3">
                        <h5 class="widget-title">Categories</h5>
                        <ul class="list-unstyled">
                            <li class="d-flex justify-content-between align-items-center">
                            <Link to="/blog">Marketing</Link>
                            <span>(14)</span>
                            </li>
                            <li class="d-flex justify-content-between align-items-center">
                            <Link to="/blog">Seo</Link>
                            <span>(2)</span>
                            </li>
                            <li class="d-flex justify-content-between align-items-center">
                            <Link to="/blog">Business</Link>
                            <span >(10)</span>
                            </li>
                            <li class="d-flex justify-content-between align-items-center">
                            <Link to="/blog">Agency</Link>
                            <span>(25)</span>
                            </li>
                            <li class="d-flex justify-content-between align-items-center">
                            <Link to="/blog">Web development</Link>
                            <span>(1)</span>
                            </li>
                        </ul>
                    </div>
                    <div class="sidebar-widget tags p-4 mb-3">
                        <h5 class="widget-title">Tags</h5>
                        <Link to="/about">Web</Link>
                        <Link to="/about">agency</Link>
                        <Link to="/about">company</Link>
                        <Link to="/about">creative</Link>
                        <Link to="/about">html</Link>
                        <Link to="/about">Marketing</Link>
                        <Link to="/about">Social Media</Link>
                        <Link to="/about">Branding</Link>
                    </div>
                    <div class="sidebar-widget advs p-4 mb-3">
                        <Link to="/home">
                            <img src={barner} alt="" class="img-fluid w-100"/>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
