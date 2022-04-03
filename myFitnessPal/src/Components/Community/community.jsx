import "./community.css";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
export const Community = () => {
    return (
        <div>
            {/* <div className="header-div">
                <div className="header">
                    <img
                        className="icon-image"
                        src="https://us.v-cdn.net/6024397/uploads/RP38WAYG9BJD/mfp-wordmark-indigo-tm.png"
                        alt="Home"
                    ></img>
                    <div className="headerNav">
                        <div className="header-nav">
                            <span>Categories</span>
                            <span>Discussions</span>
                            <span>Groups</span>
                            <span>Blogs</span>
                            <span>Find Members</span>
                            <span>Invite Friends</span>
                        </div>
                    </div>

                    <div>
                        <SearchIcon fontSize="medium" />
                        <NotificationsRoundedIcon fontSize="medium" />
                        <AccountCircleRoundedIcon fontSize="medium" />
                    </div>
                </div>
            </div> */}
            <div className="Frame">
                <div className="searchContent">
                    <div className="search-child">
                        <h1>MyFitnessPal Community</h1>
                        <button
                            style={{
                                width: "150px",
                                height: "27px",
                                background: "white",
                                border: "1px solid grey",
                                fontSize: "15px"

                            }}
                        >
                            MyFitnessPal
                        </button>
                        <input
                            type="text"
                            placeholder="Search"
                            style={{
                                width: "700px",
                                height: "27px",
                                border: "1px solid grey",

                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="main-content">
                <div className="left-content">
                    <div className="DataListWrap">
                        <ul className="DataList CategoryList pageBox">
                            <li
                                id="Category_50205"
                                className="CategoryHeading pageHeadingBox Item Category-my-fitness-pal Item-Category-my-fitness-pal Depth1 Depth-1 Unread noPhotoWrap"
                            >
                                <div role="heading" aria-level="3" className="ItemContent Category">
                                    <div className="Options">
                                        <span className="ToggleFlyout OptionsMenu">
                                            <span
                                                className="Button-Options"
                                                aria-label="Options"
                                                id="dropdown1"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="Arrow SpFlyoutHandle"
                                                ></span>{" "}
                                            </span>
                                        </span>
                                    </div>
                                    <h2>Health, Wellness and Goals</h2>{" "}
                                </div>
                                <hr />
                            </li>
                            <li
                                id="Category_6"
                                className="Item Alt Category-introduce-yourself Item-Category-introduce-yourself Depth2 Depth-2 Unread noPhotoWrap pageBox"
                            >
                                <div className="ItemContent Category">
                                    <div className="Options">
                                        <span className="ToggleFlyout OptionsMenu">
                                            <span
                                                className="Button-Options"
                                                aria-label="Options"
                                                id="dropdown2"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="Arrow SpFlyoutHandle"
                                                ></span>{" "}
                                            </span>
                                        </span>
                                    </div>
                                    <a
                                        href="//community.myfitnesspal.com/en/categories/introduce-yourself"
                                        className="Item-Icon PhotoWrap PhotoWrap-Category Hidden NoPhoto"
                                    >
                                        <span className="sr-only"></span>
                                    </a>
                                    <h3
                                        role="heading"
                                        aria-level="4"
                                        className="TitleWrap CategoryNameHeading"
                                    >
                                        <a
                                            href="https://community.myfitnesspal.com/en/categories/introduce-yourself"
                                            className="Title"
                                        >
                                            Introduce Yourself
                                        </a>{" "}

                                    </h3>
                                    <div className="CategoryDescription">
                                        If you're new to MyFitnessPal please post a message here and
                                        say hello!
                                    </div>
                                    <div className="Meta">
                                        <span className="MItem RSS">
                                            <a
                                                href="/en/categories/introduce-yourself/feed.rss"
                                                title=""
                                            >
                                                <img
                                                    src="/en/applications/dashboard/design/images/rss.gif"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </a>
                                        </span>
                                        <span className="MItem DiscussionCount ">
                                            <span title="381,490 discussions" className="Number">
                                                381.5K
                                            </span>{" "}
                                            discussions{" "}
                                        </span>
                                        <span className="MItem CommentCount">
                                            <span title="1,872,346 comments" className="Number">
                                                1.9M
                                            </span>{" "}
                                            comments{" "}
                                        </span>
                                        <span className="MItem LastDiscussionTitle">
                                            <span className="MostRecent">
                                                <span className="MLabel">Most recent:</span>{" "}
                                                <a
                                                    href="/en/discussion/10860370/intro#latest"
                                                    className="LatestPostTitle"
                                                >
                                                    Intro
                                                </a>{" "}
                                                <span className="MostRecentBy">
                                                    by{" "}
                                                    <a
                                                        href="/en/profile/1009874882/patiencemale83"
                                                        className="UserLink js-userCard"
                                                        data-userid="1009874882"
                                                    >
                                                        patiencemale83
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                        <span className="MItem LastCommentDate">12:10PM </span>
                                    </div>
                                </div>
                                <br />
                                <hr />
                            </li>
                            <li
                                id="Category_50200"
                                className="Item Category-getting-started Item-Category-getting-started Depth2 Depth-2 Unread noPhotoWrap pageBox"
                            >
                                <div className="ItemContent Category">
                                    <div className="Options">
                                        <span className="ToggleFlyout OptionsMenu">
                                            <span
                                                className="Button-Options"
                                                aria-label="Options"
                                                id="dropdown3"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="Arrow SpFlyoutHandle"
                                                ></span>{" "}
                                            </span>
                                        </span>
                                    </div>
                                    <a
                                        href="//community.myfitnesspal.com/en/categories/getting-started"
                                        className="Item-Icon PhotoWrap PhotoWrap-Category Hidden NoPhoto"
                                    >
                                        <span className="sr-only"></span>
                                    </a>
                                    <h3
                                        role="heading"
                                        aria-level="4"
                                        className="TitleWrap CategoryNameHeading"
                                    >
                                        <a
                                            href="https://community.myfitnesspal.com/en/categories/getting-started"
                                            className="Title"
                                        >
                                            Getting Started
                                        </a>{" "}
                                    </h3>
                                    <div className="CategoryDescription">
                                        Get help and support with starting your MyFitnessPal
                                        journey.{" "}
                                    </div>
                                    <div className="Meta">
                                        <span className="MItem RSS">
                                            <a
                                                href="/en/categories/getting-started/feed.rss"
                                                title=""
                                            >
                                                <img
                                                    src="/en/applications/dashboard/design/images/rss.gif"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </a>
                                        </span>
                                        <span className="MItem DiscussionCount">
                                            <span title="41,807 discussions" className="Number">
                                                41.8K
                                            </span>{" "}
                                            discussions{" "}
                                        </span>
                                        <span className="MItem CommentCount">
                                            <span title="395,945 comments" className="Number">
                                                395.9K
                                            </span>{" "}
                                            comments{" "}
                                        </span>
                                        <span className="MItem LastDiscussionTitle">
                                            <span className="MostRecent">
                                                <span className="MLabel">Most recent:</span>{" "}
                                                <a
                                                    href="/en/discussion/10859765/help-each-other-lose-some-weight-and-become-friends-on-the-journey#latest"
                                                    className="LatestPostTitle"
                                                >
                                                    Help each other lose some weight and become friends on
                                                    the journey.
                                                </a>{" "}
                                                <span className="MostRecentBy">
                                                    by{" "}
                                                    <a
                                                        href="/en/profile/29487910/roz0810"
                                                        className="UserLink js-userCard"
                                                        data-userid="29487910"
                                                    >
                                                        roz0810
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                        <span className="MItem LastCommentDate">12:39PM </span>
                                    </div>
                                </div>

                            </li>
                            <br />
                            <hr />
                            <li
                                id="Category_9"
                                className="Item Alt Category-general-diet-and-weight-loss-help Item-Category-general-diet-and-weight-loss-help Depth2 Depth-2 Unread noPhotoWrap pageBox"
                            >
                                <div className="ItemContent Category">
                                    <div className="Options">
                                        <span className="ToggleFlyout OptionsMenu">
                                            <span
                                                className="Button-Options"
                                                aria-label="Options"
                                                id="dropdown4"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="Arrow SpFlyoutHandle"
                                                ></span>{" "}
                                            </span>
                                        </span>
                                    </div>
                                    <a
                                        href="//community.myfitnesspal.com/en/categories/general-diet-and-weight-loss-help"
                                        className="Item-Icon PhotoWrap PhotoWrap-Category Hidden NoPhoto"
                                    >
                                        <span className="sr-only"></span>
                                    </a>
                                    <h3
                                        role="heading"
                                        aria-level="4"
                                        className="TitleWrap CategoryNameHeading"
                                    >
                                        <a
                                            href="https://community.myfitnesspal.com/en/categories/general-diet-and-weight-loss-help"
                                            className="Title"
                                        >
                                            Health and Weight Loss
                                        </a>{" "}
                                    </h3>
                                    <div className="CategoryDescription">
                                        Ask questions and get help on anything health and weight
                                        loss related.
                                    </div>
                                    <div className="Meta">
                                        <span className="MItem RSS">
                                            <a
                                                href="/en/categories/general-diet-and-weight-loss-help/feed.rss"
                                                title=""
                                            >
                                                <img
                                                    src="/en/applications/dashboard/design/images/rss.gif"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </a>
                                        </span>
                                        <span className="MItem DiscussionCount">
                                            <span title="257,087 discussions" className="Number">
                                                257.1K
                                            </span>{" "}
                                            discussions{" "}
                                        </span>
                                        <span className="MItem CommentCount">
                                            <span title="4,062,296 comments" className="Number">
                                                4.1M
                                            </span>{" "}
                                            comments{" "}
                                        </span>
                                        <span className="MItem LastDiscussionTitle">
                                            <span className="MostRecent">
                                                <span className="MLabel">Most recent:</span>{" "}
                                                <a
                                                    href="/en/discussion/10838897/rx-weight-loss-meds-phentermine#latest"
                                                    className="LatestPostTitle"
                                                >
                                                    RX Weight Loss Meds (Phentermine)
                                                </a>{" "}
                                                <span className="MostRecentBy">
                                                    by{" "}
                                                    <a
                                                        href="/en/profile/1009874911/delaneyreyes442"
                                                        className="UserLink js-userCard"
                                                        data-userid="1009874911"
                                                    >
                                                        delaneyreyes442
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                        <span className="MItem LastCommentDate">12:36PM </span>
                                    </div>
                                </div>
                            </li>
                            <br />
                            <hr />
                            <li
                                id="Category_5"
                                className="Item Category-food-and-nutrition Item-Category-food-and-nutrition Depth2 Depth-2 Unread noPhotoWrap pageBox"
                            >
                                <div className="ItemContent Category">
                                    <div className="Options">
                                        <span className="ToggleFlyout OptionsMenu">
                                            <span
                                                className="Button-Options"
                                                aria-label="Options"
                                                id="dropdown5"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="Arrow SpFlyoutHandle"
                                                ></span>{" "}
                                            </span>
                                        </span>
                                    </div>
                                    <a
                                        href="//community.myfitnesspal.com/en/categories/food-and-nutrition"
                                        className="Item-Icon PhotoWrap PhotoWrap-Category Hidden NoPhoto"
                                    >
                                        <span className="sr-only"></span>
                                    </a>
                                    <h3
                                        role="heading"
                                        aria-level="4"
                                        className="TitleWrap CategoryNameHeading"
                                    >
                                        <a
                                            href="https://community.myfitnesspal.com/en/categories/food-and-nutrition"
                                            className="Title"
                                        >
                                            Food and Nutrition
                                        </a>{" "}
                                    </h3>
                                    <div className="CategoryDescription">
                                        Post and share tips, nutritional advice, discuss ways of
                                        eating and more.
                                    </div>
                                    <div className="Meta">
                                        <span className="MItem RSS">
                                            <a
                                                href="/en/categories/food-and-nutrition/feed.rss"
                                                title=""
                                            >
                                                <img
                                                    src="/en/applications/dashboard/design/images/rss.gif"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </a>
                                        </span>
                                        <span className="MItem DiscussionCount">
                                            <span title="174,107 discussions" className="Number">
                                                174.1K
                                            </span>{" "}
                                            discussions{" "}
                                        </span>
                                        <span className="MItem CommentCount">
                                            <span title="2,573,081 comments" className="Number">
                                                2.6M
                                            </span>{" "}
                                            comments{" "}
                                        </span>
                                        <span className="MItem LastDiscussionTitle">
                                            <span className="MostRecent">
                                                <span className="MLabel">Most recent:</span>{" "}
                                                <a
                                                    href="/en/discussion/10860361/night-shift-worker-diet#latest"
                                                    className="LatestPostTitle"
                                                >
                                                    Night-shift worker diet?
                                                </a>{" "}
                                                <span className="MostRecentBy">
                                                    by{" "}
                                                    <a
                                                        href="/en/profile/35896585/paperpudding"
                                                        className="UserLink js-userCard"
                                                        data-userid="35896585"
                                                    >
                                                        paperpudding
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                        <span className="MItem LastCommentDate">1:10PM </span>
                                    </div>
                                </div>
                            </li>
                            <br />
                            <hr />
                            <li
                                id="Category_14"
                                className="Item Alt Category-recipes Item-Category-14-recipes Depth2 Depth-2 Unread noPhotoWrap pageBox"
                            >
                                <div className="ItemContent Category">
                                    <div className="Options">
                                        <span className="ToggleFlyout OptionsMenu">
                                            <span
                                                className="Button-Options"
                                                aria-label="Options"
                                                id="dropdown6"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="Arrow SpFlyoutHandle"
                                                ></span>{" "}
                                            </span>
                                        </span>
                                    </div>
                                    <a
                                        href="//community.myfitnesspal.com/en/categories/recipes"
                                        className="Item-Icon PhotoWrap PhotoWrap-Category Hidden NoPhoto"
                                    >
                                        <span className="sr-only"></span>
                                    </a>
                                    <h3
                                        role="heading"
                                        aria-level="4"
                                        className="TitleWrap CategoryNameHeading"
                                    >
                                        <a
                                            href="https://community.myfitnesspal.com/en/categories/recipes"
                                            className="Title"
                                        >
                                            Recipes
                                        </a>{" "}
                                    </h3>
                                    <div className="CategoryDescription">
                                        Share your favorite recipes and healthy cooking tips.{" "}
                                    </div>
                                    <div className="Meta">
                                        <span className="MItem RSS">
                                            <a href="/en/categories/recipes/feed.rss" title="">
                                                <img
                                                    src="/en/applications/dashboard/design/images/rss.gif"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </a>
                                        </span>
                                        <span className="MItem DiscussionCount">
                                            <span title="46,927 discussions" className="Number">
                                                46.9K
                                            </span>{" "}
                                            discussions{" "}
                                        </span>
                                        <span className="MItem CommentCount">
                                            <span title="610,230 comments" className="Number">
                                                610.2K
                                            </span>{" "}
                                            comments{" "}
                                        </span>
                                        <span className="MItem LastDiscussionTitle">
                                            <span className="MostRecent">
                                                <span className="MLabel">Most recent:</span>{" "}
                                                <a
                                                    href="/en/discussion/823358/what-do-your-meals-look-like-show-me-pictures#latest"
                                                    className="LatestPostTitle"
                                                >
                                                    What do your meals look like (show me pictures)....
                                                </a>{" "}
                                                <span className="MostRecentBy">
                                                    by{" "}
                                                    <a
                                                        href="/en/profile/1008291902/LazyBlondeChef"
                                                        className="UserLink js-userCard"
                                                        data-userid="1008291902"
                                                    >
                                                        LazyBlondeChef
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                        <span className="MItem LastCommentDate">8:18AM </span>
                                    </div>
                                </div>
                            </li>
                            <br />
                            <hr />
                            <li
                                id="Category_7"
                                className="Item Category-fitness-and-exercise Item-Category-fitness-and-exercise Depth2 Depth-2 Unread noPhotoWrap pageBox"
                            >
                                <div className="ItemContent Category">
                                    <div className="Options">
                                        <span className="ToggleFlyout OptionsMenu">
                                            <span
                                                className="Button-Options"
                                                aria-label="Options"
                                                id="dropdown7"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="Arrow SpFlyoutHandle"
                                                ></span>{" "}
                                            </span>
                                        </span>
                                    </div>
                                    <a
                                        href="//community.myfitnesspal.com/en/categories/fitness-and-exercise"
                                        className="Item-Icon PhotoWrap PhotoWrap-Category Hidden NoPhoto"
                                    >
                                        <span className="sr-only"></span>
                                    </a>
                                    <h3
                                        role="heading"
                                        aria-level="4"
                                        className="TitleWrap CategoryNameHeading"
                                    >
                                        <a
                                            href="https://community.myfitnesspal.com/en/categories/fitness-and-exercise"
                                            className="Title"
                                        >
                                            Fitness and Exercise
                                        </a>{" "}
                                    </h3>
                                    <div className="CategoryDescription">
                                        Share fitness tips and exercise suggestions with other
                                        MyFitnessPal members.
                                    </div>
                                    <div className="Meta">
                                        <span className="MItem RSS">
                                            <a
                                                href="/en/categories/fitness-and-exercise/feed.rss"
                                                title=""
                                            >
                                                <img
                                                    src="/en/applications/dashboard/design/images/rss.gif"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </a>
                                        </span>
                                        <span className="MItem DiscussionCount">
                                            <span title="231,036 discussions" className="Number">
                                                231K
                                            </span>{" "}
                                            discussions{" "}
                                        </span>
                                        <span className="MItem CommentCount">
                                            <span title="2,653,422 comments" className="Number">
                                                2.7M
                                            </span>{" "}
                                            comments{" "}
                                        </span>
                                        <span className="MItem LastDiscussionTitle">
                                            <span className="MostRecent">
                                                <span className="MLabel">Most recent:</span>{" "}
                                                <a
                                                    href="/en/discussion/10860354/apple-watch#latest"
                                                    className="LatestPostTitle"
                                                >
                                                    Apple Watch
                                                </a>{" "}
                                                <span className="MostRecentBy">
                                                    by{" "}
                                                    <a
                                                        href="/en/profile/1006883838/pkeye"
                                                        className="UserLink js-userCard"
                                                        data-userid="1006883838"
                                                    >
                                                        pkeye
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                        <span className="MItem LastCommentDate">11:54AM </span>
                                    </div>
                                </div>
                            </li>
                            <br />
                            <hr />
                            <li
                                id="Category_100008"
                                className="Item Alt Category-sleep-mindfulness-wellness Item-Category-sleep-mindfulness-wellness Depth2 Depth-2 Unread noPhotoWrap pageBox"
                            >
                                <div className="ItemContent Category">
                                    <div className="Options">
                                        <span className="ToggleFlyout OptionsMenu">
                                            <span
                                                className="Button-Options"
                                                aria-label="Options"
                                                id="dropdown8"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="Arrow SpFlyoutHandle"
                                                ></span>{" "}
                                            </span>
                                        </span>
                                    </div>
                                    <a
                                        href="//community.myfitnesspal.com/en/categories/sleep-mindfulness-wellness"
                                        className="Item-Icon PhotoWrap PhotoWrap-Category Hidden NoPhoto"
                                    >
                                        <span className="sr-only"></span>
                                    </a>
                                    <h3
                                        role="heading"
                                        aria-level="4"
                                        className="TitleWrap CategoryNameHeading"
                                    >
                                        <a
                                            href="https://community.myfitnesspal.com/en/categories/sleep-mindfulness-wellness"
                                            className="Title"
                                        >
                                            Sleep, Mindfulness and Overall Wellness
                                        </a>{" "}
                                    </h3>
                                    <div className="CategoryDescription">
                                        A place to discuss broader wellness themes like sleep,
                                        meditation, mindfulness and overall wellness.
                                    </div>
                                    <div className="Meta">
                                        <span className="MItem RSS">
                                            <a
                                                href="/en/categories/sleep-mindfulness-wellness/feed.rss"
                                                title=""
                                            >
                                                <img
                                                    src="/en/applications/dashboard/design/images/rss.gif"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </a>
                                        </span>
                                        <span className="MItem DiscussionCount">
                                            <span title="224 discussions" className="Number">
                                                224
                                            </span>{" "}
                                            discussions{" "}
                                        </span>
                                        <span className="MItem CommentCount">
                                            <span title="3,470 comments" className="Number">
                                                3.5K
                                            </span>{" "}
                                            comments{" "}
                                        </span>
                                        <span className="MItem LastDiscussionTitle">
                                            <span className="MostRecent">
                                                <span className="MLabel">Most recent:</span>{" "}
                                                <a
                                                    href="/en/discussion/10858230/pills-dont-work-either#latest"
                                                    className="LatestPostTitle"
                                                >
                                                    Pills don't work either...
                                                </a>{" "}
                                                <span className="MostRecentBy">
                                                    by{" "}
                                                    <a
                                                        href="/en/profile/1008809464/Hollis100"
                                                        className="UserLink js-userCard"
                                                        data-userid="1008809464"
                                                    >
                                                        Hollis100
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                        <span className="MItem LastCommentDate">March 28 </span>
                                    </div>
                                </div>
                            </li>
                            <br />
                            <hr />
                            <li
                                id="Category_50201"
                                className="Item Category-goal-maintaining-weight Item-Category-50201-goal-maintaining-weight Depth2 Depth-2 Unread noPhotoWrap pageBox"
                            >
                                <div className="ItemContent Category">
                                    <div className="Options">
                                        <span className="ToggleFlyout OptionsMenu">
                                            <span
                                                className="Button-Options"
                                                aria-label="Options"
                                                id="dropdown9"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="Arrow SpFlyoutHandle"
                                                ></span>{" "}
                                            </span>
                                        </span>
                                    </div>
                                    <a
                                        href="//community.myfitnesspal.com/en/categories/goal-maintaining-weight"
                                        className="Item-Icon PhotoWrap PhotoWrap-Category Hidden NoPhoto"
                                    >
                                        <span className="sr-only"></span>
                                    </a>
                                    <h3
                                        role="heading"
                                        aria-level="4"
                                        className="TitleWrap CategoryNameHeading"
                                    >
                                        <a
                                            href="https://community.myfitnesspal.com/en/categories/goal-maintaining-weight"
                                            className="Title"
                                        >
                                            Goal: Maintaining Weight
                                        </a>{" "}
                                    </h3>
                                    <div className="CategoryDescription">
                                        For those using MyFitnessPal to maintain their current
                                        weight.{" "}
                                    </div>
                                    <div className="Meta">
                                        <span className="MItem RSS">
                                            <a
                                                href="/en/categories/goal-maintaining-weight/feed.rss"
                                                title=""
                                            >
                                                <img
                                                    src="/en/applications/dashboard/design/images/rss.gif"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </a>
                                        </span>
                                        <span className="MItem DiscussionCount">
                                            <span title="6,279 discussions" className="Number">
                                                6.3K
                                            </span>{" "}
                                            discussions{" "}
                                        </span>
                                        <span className="MItem CommentCount">
                                            <span title="127,863 comments" className="Number">
                                                127.9K
                                            </span>{" "}
                                            comments{" "}
                                        </span>
                                        <span className="MItem LastDiscussionTitle">
                                            <span className="MostRecent">
                                                <span className="MLabel">Most recent:</span>{" "}
                                                <a
                                                    href="/en/discussion/10856673/friend-for-motivation#latest"
                                                    className="LatestPostTitle"
                                                >
                                                    Friend for motivation
                                                </a>{" "}
                                                <span className="MostRecentBy">
                                                    by{" "}
                                                    <a
                                                        href="/en/profile/1004353576/gorple76"
                                                        className="UserLink js-userCard"
                                                        data-userid="1004353576"
                                                    >
                                                        gorple76
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                        <span className="MItem LastCommentDate">9:57AM </span>
                                    </div>
                                </div>
                            </li>
                            <br />
                            <hr />
                            <li
                                id="Category_50202"
                                className="Item Alt Category-goal-gaining-weight Item-Category-goal-gaining-weight Depth2 Depth-2 Unread noPhotoWrap pageBox"
                            >
                                <div className="ItemContent Category">
                                    <div className="Options">
                                        <span className="ToggleFlyout OptionsMenu">
                                            <span
                                                className="Button-Options"
                                                aria-label="Options"
                                                id="dropdown10"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="Arrow SpFlyoutHandle"
                                                ></span>{" "}
                                            </span>
                                        </span>
                                    </div>
                                    <a
                                        href="//community.myfitnesspal.com/en/categories/goal-gaining-weight"
                                        className="Item-Icon PhotoWrap PhotoWrap-Category Hidden NoPhoto"
                                    >
                                        <span className="sr-only"></span>
                                    </a>
                                    <h3
                                        role="heading"
                                        aria-level="4"
                                        className="TitleWrap CategoryNameHeading"
                                    >
                                        <a
                                            href="https://community.myfitnesspal.com/en/categories/goal-gaining-weight"
                                            className="Title"
                                        >
                                            Goal: Gaining Weight and Body Building
                                        </a>{" "}
                                    </h3>
                                    <div className="CategoryDescription">
                                        For those using MyFitnessPal with the purpose of gaining
                                        weight and body building.
                                    </div>
                                    <div className="Meta">
                                        <span className="MItem RSS">
                                            <a
                                                href="/en/categories/goal-gaining-weight/feed.rss"
                                                title=""
                                            >
                                                <img
                                                    src="/en/applications/dashboard/design/images/rss.gif"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </a>
                                        </span>
                                        <span className="MItem DiscussionCount">
                                            <span title="8,254 discussions" className="Number">
                                                8.3K
                                            </span>{" "}
                                            discussions{" "}
                                        </span>
                                        <span className="MItem CommentCount">
                                            <span title="125,833 comments" className="Number">
                                                125.8K
                                            </span>{" "}
                                            comments{" "}
                                        </span>
                                        <span className="MItem LastDiscussionTitle">
                                            <span className="MostRecent">
                                                <span className="MLabel">Most recent:</span>{" "}
                                                <a
                                                    href="/en/discussion/10860031/when-eating-becomes-a-chore#latest"
                                                    className="LatestPostTitle"
                                                >
                                                    When eating becomes a chore…
                                                </a>{" "}
                                                <span className="MostRecentBy">
                                                    by{" "}
                                                    <a
                                                        href="/en/profile/27827333/sijomial"
                                                        className="UserLink js-userCard"
                                                        data-userid="27827333"
                                                    >
                                                        sijomial
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                        <span className="MItem LastCommentDate">12:45PM </span>
                                    </div>
                                </div>
                            </li>
                            <br />
                            <hr />
                            <li
                                id="Category_15"
                                className="Item Category-success-stories Item-Category-success-stories Depth2 Depth-2 Unread noPhotoWrap pageBox"
                            >
                                <div className="ItemContent Category">
                                    <div className="Options">
                                        <span className="ToggleFlyout OptionsMenu">
                                            <span
                                                className="Button-Options"
                                                aria-label="Options"
                                                id="dropdown11"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="Arrow SpFlyoutHandle"
                                                ></span>{" "}
                                            </span>
                                        </span>
                                    </div>
                                    <a
                                        href="//community.myfitnesspal.com/en/categories/success-stories"
                                        className="Item-Icon PhotoWrap PhotoWrap-Category Hidden NoPhoto"
                                    >
                                        <span className="sr-only"></span>
                                    </a>
                                    <h3
                                        role="heading"
                                        aria-level="4"
                                        className="TitleWrap CategoryNameHeading"
                                    >
                                        <a
                                            href="https://community.myfitnesspal.com/en/categories/success-stories"
                                            className="Title"
                                        >
                                            Success Stories
                                        </a>{" "}
                                    </h3>
                                    <div className="CategoryDescription">
                                        Share your success story and celebrate your victories big
                                        and small! Every small win counts.
                                    </div>
                                    <div className="Meta">
                                        <span className="MItem RSS">
                                            <a
                                                href="/en/categories/success-stories/feed.rss"
                                                title=""
                                            >
                                                <img
                                                    src="/en/applications/dashboard/design/images/rss.gif"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </a>
                                        </span>
                                        <span className="MItem DiscussionCount">
                                            <span title="72,671 discussions" className="Number">
                                                72.7K
                                            </span>{" "}
                                            discussions{" "}
                                        </span>
                                        <span className="MItem CommentCount">
                                            <span title="1,695,812 comments" className="Number">
                                                1.7M
                                            </span>{" "}
                                            comments{" "}
                                        </span>
                                        <span className="MItem LastDiscussionTitle">
                                            <span className="MostRecent">
                                                <span className="MLabel">Most recent:</span>{" "}
                                                <a
                                                    href="/en/discussion/10859499/the-first-100#latest"
                                                    className="LatestPostTitle"
                                                >
                                                    The first 100
                                                </a>{" "}
                                                <span className="MostRecentBy">
                                                    by{" "}
                                                    <a
                                                        href="/en/profile/38710267/RosyBest"
                                                        className="UserLink js-userCard"
                                                        data-userid="38710267"
                                                    >
                                                        RosyBest
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                        <span className="MItem LastCommentDate">10:36AM </span>
                                    </div>
                                </div>
                            </li>
                            <br />
                            <hr />
                            <li
                                id="Category_8"
                                className="Item Alt Category-motivation-and-support Item-Category-8-motivation-and-support Depth2 Depth-2 Unread noPhotoWrap pageBox"
                            >
                                <div className="ItemContent Category">
                                    <div className="Options">
                                        <span className="ToggleFlyout OptionsMenu">
                                            <span
                                                className="Button-Options"
                                                aria-label="Options"
                                                id="dropdown12"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="Arrow SpFlyoutHandle"
                                                ></span>{" "}
                                            </span>
                                        </span>
                                    </div>
                                    <a
                                        href="//community.myfitnesspal.com/en/categories/motivation-and-support"
                                        className="Item-Icon PhotoWrap PhotoWrap-Category Hidden NoPhoto"
                                    >
                                        <span className="sr-only"></span>
                                    </a>
                                    <h3
                                        role="heading"
                                        aria-level="4"
                                        className="TitleWrap CategoryNameHeading"
                                    >
                                        <a
                                            href="https://community.myfitnesspal.com/en/categories/motivation-and-support"
                                            className="Title"
                                        >
                                            Motivation and Support
                                        </a>{" "}
                                    </h3>
                                    <div className="CategoryDescription">
                                        You are not alone! Get motivational help and support here
                                        from other MyFitnessPal members.{" "}
                                    </div>
                                    <div className="Meta">
                                        <span className="MItem RSS">
                                            <a
                                                href="/en/categories/motivation-and-support/feed.rss"
                                                title=""
                                            >
                                                <img
                                                    src="/en/applications/dashboard/design/images/rss.gif"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </a>
                                        </span>
                                        <span className="MItem DiscussionCount">
                                            <span title="151,246 discussions" className="Number">
                                                151.2K
                                            </span>{" "}
                                            discussions{" "}
                                        </span>
                                        <span className="MItem CommentCount">
                                            <span title="2,552,832 comments" className="Number">
                                                2.6M
                                            </span>{" "}
                                            comments{" "}
                                        </span>
                                        <span className="MItem LastDiscussionTitle">
                                            <span className="MostRecent">
                                                <span className="MLabel">Most recent:</span>{" "}
                                                <a
                                                    href="/en/discussion/10829697/lose-50lbs-club#latest"
                                                    className="LatestPostTitle"
                                                >
                                                    Lose 50lbs+ club
                                                </a>{" "}
                                                <span className="MostRecentBy">
                                                    by{" "}
                                                    <a
                                                        href="/en/profile/29487910/roz0810"
                                                        className="UserLink js-userCard"
                                                        data-userid="29487910"
                                                    >
                                                        roz0810
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                        <span className="MItem LastCommentDate">12:34PM </span>
                                    </div>
                                </div>
                            </li>
                            <br />
                            <hr />
                            <li
                                id="Category_100005"
                                className="Item Category-challenges Item-Category-challenges Depth2 Depth-2 Unread noPhotoWrap pageBox"
                            >
                                <div className="ItemContent Category">
                                    <div className="Options">
                                        <span className="ToggleFlyout OptionsMenu">
                                            <span
                                                className="Button-Options"
                                                aria-label="Options"
                                                id="dropdown13"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="Arrow SpFlyoutHandle"
                                                ></span>{" "}
                                            </span>
                                        </span>
                                    </div>
                                    <a
                                        href="//community.myfitnesspal.com/en/categories/challenges"
                                        className="Item-Icon PhotoWrap PhotoWrap-Category Hidden NoPhoto"
                                    >
                                        <span className="sr-only"></span>
                                    </a>
                                    <h3
                                        role="heading"
                                        aria-level="4"
                                        className="TitleWrap CategoryNameHeading"
                                    >
                                        <a
                                            href="https://community.myfitnesspal.com/en/categories/challenges"
                                            className="Title"
                                        >
                                            Challenges
                                        </a>{" "}
                                    </h3>
                                    <div className="CategoryDescription">
                                        For those looking to start or join a new challenge.{" "}
                                    </div>
                                    <div className="Meta">
                                        <span className="MItem RSS">
                                            <a href="/en/categories/challenges/feed.rss" title="">
                                                <img
                                                    src="/en/applications/dashboard/design/images/rss.gif"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </a>
                                        </span>
                                        <span className="MItem DiscussionCount">
                                            <span title="6,988 discussions" className="Number">
                                                7K
                                            </span>{" "}
                                            discussions{" "}
                                        </span>
                                        <span className="MItem CommentCount">
                                            <span title="483,452 comments" className="Number">
                                                483.5K
                                            </span>{" "}
                                            comments{" "}
                                        </span>
                                        <span className="MItem LastDiscussionTitle">
                                            <span className="MostRecent">
                                                <span className="MLabel">Most recent:</span>{" "}
                                                <a
                                                    href="/en/discussion/10857562/24-hours-of-exercise-per-month-challenge-march-2022#latest"
                                                    className="LatestPostTitle"
                                                >
                                                    24 Hours of Exercise per Month Challenge - MARCH 2022
                                                </a>{" "}
                                                <span className="MostRecentBy">
                                                    by{" "}
                                                    <a
                                                        href="/en/profile/1009010421/lazycat2018"
                                                        className="UserLink js-userCard"
                                                        data-userid="1009010421"
                                                    >
                                                        lazycat2018
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                        <span className="MItem LastCommentDate">12:48PM </span>
                                    </div>
                                </div>
                            </li>
                            <br />
                            <hr />
                            <li
                                id="Category_100007"
                                className="Item Alt Category-nutrition-debate Item-Category-nutrition-debate Depth2 Depth-2 Unread noPhotoWrap pageBox"
                            >
                                <div className="ItemContent Category">
                                    <div className="Options">
                                        <span className="ToggleFlyout OptionsMenu">
                                            <span
                                                className="Button-Options"
                                                aria-label="Options"
                                                id="dropdown14"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="Arrow SpFlyoutHandle"
                                                ></span>{" "}
                                            </span>
                                        </span>
                                    </div>
                                    <a
                                        href="//community.myfitnesspal.com/en/categories/nutrition-debate"
                                        className="Item-Icon PhotoWrap PhotoWrap-Category Hidden NoPhoto"
                                    >
                                        <span className="sr-only"></span>
                                    </a>
                                    <h3
                                        role="heading"
                                        aria-level="4"
                                        className="TitleWrap CategoryNameHeading"
                                    >
                                        <a
                                            href="https://community.myfitnesspal.com/en/categories/nutrition-debate"
                                            className="Title"
                                        >
                                            Debate Club
                                        </a>{" "}
                                    </h3>
                                    <div className="CategoryDescription">
                                        Discuss highly debated health and fitness topics.
                                    </div>
                                    <div className="Meta">
                                        <span className="MItem RSS">
                                            <a
                                                href="/en/categories/nutrition-debate/feed.rss"
                                                title=""
                                            >
                                                <img
                                                    src="/en/applications/dashboard/design/images/rss.gif"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </a>
                                        </span>
                                        <span className="MItem DiscussionCount">
                                            <span title="1,191 discussions" className="Number">
                                                1.2K
                                            </span>{" "}
                                            discussions{" "}
                                        </span>
                                        <span className="MItem CommentCount">
                                            <span title="110,688 comments" className="Number">
                                                110.7K
                                            </span>{" "}
                                            comments{" "}
                                        </span>
                                        <span className="MItem LastDiscussionTitle">
                                            <span className="MostRecent">
                                                <span className="MLabel">Most recent:</span>{" "}
                                                <a
                                                    href="/en/discussion/10812148/height-ism#latest"
                                                    className="LatestPostTitle"
                                                >
                                                    Height-ism?
                                                </a>{" "}
                                                <span className="MostRecentBy">
                                                    by{" "}
                                                    <a
                                                        href="/en/profile/51502746/T1DCarnivoreRunner"
                                                        className="UserLink js-userCard"
                                                        data-userid="51502746"
                                                    >
                                                        T1DCarnivoreRunner
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                        <span className="MItem LastCommentDate">6:54AM </span>
                                    </div>
                                </div>
                            </li>
                            <br />
                            <hr />
                            <li
                                id="Category_100011"
                                className="CategoryHeading pageHeadingBox Item Category-social-corner Item-Category-social-corner Depth1 Depth-1 Unread noPhotoWrap"
                            >
                                <div role="heading" aria-level="3" className="ItemContent Category">
                                    <div className="Options">
                                        <span className="ToggleFlyout OptionsMenu">
                                            <span
                                                className="Button-Options"
                                                aria-label="Options"
                                                id="dropdown15"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="Arrow SpFlyoutHandle"
                                                ></span>{" "}
                                            </span>
                                        </span>
                                    </div>
                                    Social Corner{" "}
                                </div>
                            </li>
                            <li
                                id="Category_16"
                                className="Item Alt Category-chit-chat-fun-and-games Item-Category-chit-chat-fun-and-games Depth2 Depth-2 Unread noPhotoWrap pageBox"
                            >
                                <div className="ItemContent Category">
                                    <div className="Options">
                                        <span className="ToggleFlyout OptionsMenu">
                                            <span
                                                className="Button-Options"
                                                aria-label="Options"
                                                id="dropdown16"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="Arrow SpFlyoutHandle"
                                                ></span>{" "}
                                            </span>
                                        </span>
                                    </div>
                                    <a
                                        href="//community.myfitnesspal.com/en/categories/chit-chat-fun-and-games"
                                        className="Item-Icon PhotoWrap PhotoWrap-Category Hidden NoPhoto"
                                    >
                                        <span className="sr-only"></span>
                                    </a>
                                    <h3
                                        role="heading"
                                        aria-level="4"
                                        className="TitleWrap CategoryNameHeading"
                                    >
                                        <a
                                            href="https://community.myfitnesspal.com/en/categories/chit-chat-fun-and-games"
                                            className="Title"
                                        >
                                            Chit-Chat
                                        </a>{" "}
                                    </h3>
                                    <div className="CategoryDescription">
                                        Shoot the breeze &amp; chat with members.{" "}
                                    </div>
                                    <div className="Meta">
                                        <span className="MItem RSS">
                                            <a
                                                href="/en/categories/chit-chat-fun-and-games/feed.rss"
                                                title=""
                                            >
                                                <img
                                                    src="/en/applications/dashboard/design/images/rss.gif"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </a>
                                        </span>
                                        <span className="MItem DiscussionCount">
                                            <span title="95,794 discussions" className="Number">
                                                95.8K
                                            </span>{" "}
                                            discussions{" "}
                                        </span>
                                        <span className="MItem CommentCount">
                                            <span title="4,813,160 comments" className="Number">
                                                4.8M
                                            </span>{" "}
                                            comments{" "}
                                        </span>
                                        <span className="MItem LastDiscussionTitle">
                                            <span className="MostRecent">
                                                <span className="MLabel">Most recent:</span>{" "}
                                                <a
                                                    href="/en/discussion/10858324/worst-song-released-of-all-time-in-your-opinion#latest"
                                                    className="LatestPostTitle"
                                                >
                                                    Worst song released of all time in your opinion?
                                                </a>{" "}
                                                <span className="MostRecentBy">
                                                    by{" "}
                                                    <a
                                                        href="/en/profile/1467966/glassyo"
                                                        className="UserLink js-userCard"
                                                        data-userid="1467966"
                                                    >
                                                        glassyo
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                        <span className="MItem LastCommentDate">11:59AM </span>
                                    </div>
                                </div>
                            </li>
                            <br />
                            <hr />
                            <li
                                id="Category_100006"
                                className="Item Category-fun-games Item-Category-fun-games Depth2 Depth-2 Unread noPhotoWrap pageBox"
                            >
                                <div className="ItemContent Category">
                                    <div className="Options">
                                        <span className="ToggleFlyout OptionsMenu">
                                            <span
                                                className="Button-Options"
                                                aria-label="Options"
                                                id="dropdown17"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="Arrow SpFlyoutHandle"
                                                ></span>{" "}
                                            </span>
                                        </span>
                                    </div>
                                    <a
                                        href="//community.myfitnesspal.com/en/categories/fun-games"
                                        className="Item-Icon PhotoWrap PhotoWrap-Category Hidden NoPhoto"
                                    >
                                        <span className="sr-only"></span>
                                    </a>
                                    <h3
                                        role="heading"
                                        aria-level="4"
                                        className="TitleWrap CategoryNameHeading"
                                    >
                                        <a
                                            href="https://community.myfitnesspal.com/en/categories/fun-games"
                                            className="Title"
                                        >
                                            Fun and Games
                                        </a>{" "}
                                    </h3>
                                    <div className="CategoryDescription">
                                        Play a game or share a joke.
                                    </div>
                                    <div className="Meta">
                                        <span className="MItem RSS">
                                            <a href="/en/categories/fun-games/feed.rss" title="">
                                                <img
                                                    src="/en/applications/dashboard/design/images/rss.gif"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </a>
                                        </span>
                                        <span className="MItem DiscussionCount">
                                            <span title="2,431 discussions" className="Number">
                                                2.4K
                                            </span>{" "}
                                            discussions{" "}
                                        </span>
                                        <span className="MItem CommentCount">
                                            <span title="4,388,979 comments" className="Number">
                                                4.4M
                                            </span>{" "}
                                            comments{" "}
                                        </span>
                                        <span className="MItem LastDiscussionTitle">
                                            <span className="MostRecent">
                                                <span className="MLabel">Most recent:</span>{" "}
                                                <a
                                                    href="/en/discussion/10803212/wrong-answers-only#latest"
                                                    className="LatestPostTitle"
                                                >
                                                    Wrong answers ONLY!
                                                </a>{" "}
                                                <span className="MostRecentBy">
                                                    by{" "}
                                                    <a
                                                        href="/en/profile/35896585/paperpudding"
                                                        className="UserLink js-userCard"
                                                        data-userid="35896585"
                                                    >
                                                        paperpudding
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                        <span className="MItem LastCommentDate">1:06PM </span>
                                    </div>
                                </div>
                            </li>
                            <br />
                            <hr />
                            <li
                                id="Category_100001"
                                className="CategoryHeading pageHeadingBox Item Alt Category-myfitnesspal Item-Category-myfitnesspal Depth1 Depth-1 Unread noPhotoWrap"
                            >
                                <div role="heading" aria-level="3" className="ItemContent Category">
                                    <div className="Options">
                                        <span className="ToggleFlyout OptionsMenu">
                                            <span
                                                className="Button-Options"
                                                aria-label="Options"
                                                id="dropdown18"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="Arrow SpFlyoutHandle"
                                                ></span>{" "}
                                            </span>
                                        </span>
                                    </div>
                                    MyFitnessPal Information{" "}
                                </div>
                            </li>
                            <li
                                id="Category_50203"
                                className="Item Category-mfp-news-announcements Item-Category-mfp-news-announcements Depth2 Depth-2 Unread noPhotoWrap pageBox"
                            >
                                <div className="ItemContent Category">
                                    <div className="Options">
                                        <span className="ToggleFlyout OptionsMenu">
                                            <span
                                                className="Button-Options"
                                                aria-label="Options"
                                                id="dropdown19"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="Arrow SpFlyoutHandle"
                                                ></span>{" "}
                                            </span>
                                        </span>
                                    </div>
                                    <a
                                        href="//community.myfitnesspal.com/en/categories/mfp-news-announcements"
                                        className="Item-Icon PhotoWrap PhotoWrap-Category Hidden NoPhoto"
                                    >
                                        <span className="sr-only"></span>
                                    </a>
                                    <h3
                                        role="heading"
                                        aria-level="4"
                                        className="TitleWrap CategoryNameHeading"
                                    >
                                        <a
                                            href="https://community.myfitnesspal.com/en/categories/mfp-news-announcements"
                                            className="Title"
                                        >
                                            News and Announcements
                                        </a>{" "}
                                    </h3>
                                    <div className="CategoryDescription">
                                        Updates and important announcements from the MyFitnessPal
                                        team.
                                    </div>
                                    <div className="Meta">
                                        <span className="MItem RSS">
                                            <a
                                                href="/en/categories/mfp-news-announcements/feed.rss"
                                                title=""
                                            >
                                                <img
                                                    src="/en/applications/dashboard/design/images/rss.gif"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </a>
                                        </span>
                                        <span className="MItem DiscussionCount">
                                            <span title="16 discussions" className="Number">
                                                16
                                            </span>{" "}
                                            discussions{" "}
                                        </span>
                                        <span className="MItem CommentCount">
                                            <span title="8 comments" className="Number">
                                                8
                                            </span>{" "}
                                            comments{" "}
                                        </span>
                                        <span className="MItem LastDiscussionTitle">
                                            <span className="MostRecent">
                                                <span className="MLabel">Most recent:</span>{" "}
                                                <a
                                                    href="/en/discussion/10858616/disagree-no-more#latest"
                                                    className="LatestPostTitle"
                                                >
                                                    Disagree, No More!
                                                </a>{" "}
                                                <span className="MostRecentBy">
                                                    by{" "}
                                                    <a
                                                        href="/en/profile/1003461735/Betty"
                                                        className="UserLink js-userCard"
                                                        data-userid="1003461735"
                                                    >
                                                        Betty
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                        <span className="MItem LastCommentDate">March 10 </span>
                                    </div>
                                </div>
                            </li>
                            <br />
                            <hr />
                            <li
                                id="Category_100009"
                                className="Item Alt Category-feature-suggestions-and-ideas Item-Category-feature-suggestions-and-ideas Depth2 Depth-2 Unread noPhotoWrap pageBox"
                            >
                                <div className="ItemContent Category">
                                    <div className="Options">
                                        <span className="ToggleFlyout OptionsMenu">
                                            <span
                                                className="Button-Options"
                                                aria-label="Options"
                                                id="dropdown20"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="Arrow SpFlyoutHandle"
                                                ></span>{" "}
                                            </span>
                                        </span>
                                    </div>
                                    <a
                                        href="//community.myfitnesspal.com/en/categories/feature-suggestions-and-ideas"
                                        className="Item-Icon PhotoWrap PhotoWrap-Category Hidden NoPhoto"
                                    >
                                        <span className="sr-only"></span>
                                    </a>
                                    <h3
                                        role="heading"
                                        aria-level="4"
                                        className="TitleWrap CategoryNameHeading"
                                    >
                                        <a
                                            href="https://community.myfitnesspal.com/en/categories/feature-suggestions-and-ideas"
                                            className="Title"
                                        >
                                            Feature Suggestions and Ideas
                                        </a>{" "}
                                    </h3>
                                    <div className="CategoryDescription">
                                        Have a great idea? Share your feature suggestions and app
                                        improvement ideas here.
                                    </div>
                                    <div className="Meta">
                                        <span className="MItem RSS">
                                            <a
                                                href="/en/categories/feature-suggestions-and-ideas/feed.rss"
                                                title=""
                                            >
                                                <img
                                                    src="/en/applications/dashboard/design/images/rss.gif"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </a>
                                        </span>
                                        <span className="MItem DiscussionCount">
                                            <span title="147 discussions" className="Number">
                                                147
                                            </span>{" "}
                                            discussions{" "}
                                        </span>
                                        <span className="MItem CommentCount">
                                            <span title="361 comments" className="Number">
                                                361
                                            </span>{" "}
                                            comments{" "}
                                        </span>
                                        <span className="MItem LastDiscussionTitle">
                                            <span className="MostRecent">
                                                <span className="MLabel">Most recent:</span>{" "}
                                                <a
                                                    href="/en/discussion/10860296/add-sugar-alcohols#latest"
                                                    className="LatestPostTitle"
                                                >
                                                    Add sugar alcohols
                                                </a>{" "}
                                                <span className="MostRecentBy">
                                                    by{" "}
                                                    <a
                                                        href="/en/profile/1009873219/billieaut"
                                                        className="UserLink js-userCard"
                                                        data-userid="1009873219"
                                                    >
                                                        billieaut
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                        <span className="MItem LastCommentDate">12:26AM </span>
                                    </div>
                                </div>
                            </li>
                            <br />
                            <hr />
                            <li
                                id="Category_100010"
                                className="Item Category-myfitnesspal-tech-support-questions Item-Category-myfitnesspal-tech-support-questions Depth2 Depth-2 Unread noPhotoWrap pageBox"
                            >
                                <div className="ItemContent Category">
                                    <div className="Options">
                                        <span className="ToggleFlyout OptionsMenu">
                                            <span
                                                className="Button-Options"
                                                aria-label="Options"
                                                id="dropdown21"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="Arrow SpFlyoutHandle"
                                                ></span>{" "}
                                            </span>
                                        </span>
                                    </div>
                                    <a
                                        href="//community.myfitnesspal.com/en/categories/myfitnesspal-tech-support-questions"
                                        className="Item-Icon PhotoWrap PhotoWrap-Category Hidden NoPhoto"
                                    >
                                        <span className="sr-only"></span>
                                    </a>
                                    <h3
                                        role="heading"
                                        aria-level="4"
                                        className="TitleWrap CategoryNameHeading"
                                    >
                                        <a
                                            href="https://community.myfitnesspal.com/en/categories/myfitnesspal-tech-support-questions"
                                            className="Title"
                                        >
                                            MyFitnessPal Tech Support Questions
                                        </a>{" "}
                                    </h3>
                                    <div className="CategoryDescription">
                                        Having trouble with MyFitnessPal? Get help from other
                                        members here.
                                    </div>
                                    <div className="Meta">
                                        <span className="MItem RSS">
                                            <a
                                                href="/en/categories/myfitnesspal-tech-support-questions/feed.rss"
                                                title=""
                                            >
                                                <img
                                                    src="/en/applications/dashboard/design/images/rss.gif"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </a>
                                        </span>
                                        <span className="MItem DiscussionCount">
                                            <span title="387 discussions" className="Number">
                                                387
                                            </span>{" "}
                                            discussions{" "}
                                        </span>
                                        <span className="MItem CommentCount">
                                            <span title="3,005 comments" className="Number">
                                                3K
                                            </span>{" "}
                                            comments{" "}
                                        </span>
                                        <span className="MItem LastDiscussionTitle">
                                            <span className="MostRecent">
                                                <span className="MLabel">Most recent:</span>{" "}
                                                <a
                                                    href="/en/discussion/10860372/why-are-ads-popping-up-lately-on-my-mfp-platform#latest"
                                                    className="LatestPostTitle"
                                                >
                                                    Why are ads popping up lately on my MFP platform?
                                                </a>{" "}
                                                <span className="MostRecentBy">
                                                    by{" "}
                                                    <a
                                                        href="/en/profile/1009801329/frankconnell19"
                                                        className="UserLink js-userCard"
                                                        data-userid="1009801329"
                                                    >
                                                        frankconnell19
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                        <span className="MItem LastCommentDate">1:01PM </span>
                                    </div>
                                </div>
                            </li>
                            <br />
                            <hr />
                            <li
                                id="Category_1004"
                                className="Item Alt Category-social-groups Item-social-groups Depth1 Depth-1 Unread noPhotoWrap pageBox"
                            >
                                <div className="ItemContent Category">
                                    <div className="Options">
                                        <span className="ToggleFlyout OptionsMenu">
                                            <span
                                                className="Button-Options"
                                                aria-label="Options"
                                                id="dropdown22"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="Arrow SpFlyoutHandle"
                                                ></span>{" "}
                                            </span>
                                        </span>
                                    </div>
                                    <a
                                        href="//community.myfitnesspal.com/en/categories/social-groups"
                                        className="Item-Icon PhotoWrap PhotoWrap-Category Hidden NoPhoto"
                                    >
                                        <span className="sr-only"></span>
                                    </a>
                                    <h3
                                        role="heading"
                                        aria-level="3"
                                        className="TitleWrap CategoryNameHeading isEmptyDescription"
                                    >
                                        <a
                                            href="https://community.myfitnesspal.com/en/categories/social-groups"
                                            className="Title"
                                        >
                                            Social Groups
                                        </a>{" "}
                                    </h3>
                                    <div className="CategoryDescription"></div>
                                    <div className="Meta">
                                        <span className="MItem RSS">
                                            <a href="/en/categories/social-groups/feed.rss" title="">
                                                <img
                                                    src="/en/applications/dashboard/design/images/rss.gif"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </a>
                                        </span>
                                        <span className="MItem DiscussionCount">
                                            <span title="366,182 discussions" className="Number">
                                                366.2K
                                            </span>{" "}
                                            discussions{" "}
                                        </span>
                                        <span className="MItem CommentCount">
                                            <span title="6,040,520 comments" className="Number">
                                                6M
                                            </span>{" "}
                                            comments{" "}
                                        </span>
                                        <span className="MItem LastDiscussionTitle">
                                            <span className="MostRecent">
                                                <span className="MLabel">Most recent:</span>{" "}
                                                <a
                                                    href="/en/discussion/10857522/shape-shifters-team-chat-march-2022#latest"
                                                    className="LatestPostTitle"
                                                >
                                                    Shape Shifters Team Chat - MARCH 2022
                                                </a>
                                                <span className="MostRecentBy">
                                                    by{" "}
                                                    <a
                                                        href="/en/profile/1009430185/Pupowl"
                                                        className="UserLink js-userCard"
                                                        data-userid="1009430185"
                                                    >
                                                        Pupowl
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                        <span className="MItem LastCommentDate">1:32PM </span>
                                    </div>
                                </div>
                            </li>
                            <br />
                            <hr />
                        </ul>
                    </div>
                </div>
                <div className="right-content">
                    <div className="pageBox">
                        <h4 className="css-6h0amq-typographyStyles-componentSubTitle heading heading-4">
                            Quick Links
                        </h4>
                        <div className="quick-link-block">
                            <nav>
                                <ul className="css-lfbjtw-quickLinks-list no-css">
                                    <li className="css-ache77-quickLinks-listItem">
                                        <a
                                            aria-current="false"
                                            href="https://community.myfitnesspal.com/en/categories"
                                            to="/categories"
                                            className="css-1i36ji2-QuickLinks-classNamees-link"

                                        >
                                            Categories
                                        </a>
                                    </li>
                                    <li className="css-ache77-quickLinks-listItem">
                                        <a
                                            aria-current="false"
                                            href="https://community.myfitnesspal.com/en/discussions"
                                            to="/discussions"
                                            className="css-1i36ji2-QuickLinks-classNamees-link"

                                        >
                                            Recent Discussions
                                        </a>
                                    </li>
                                    <li className="css-ache77-quickLinks-listItem">
                                        <a
                                            aria-current="false"
                                            href="https://community.myfitnesspal.com/en/groups"
                                            to="/groups"
                                            className="css-1i36ji2-QuickLinks-classNamees-link"

                                        >
                                            Groups
                                        </a>
                                    </li>
                                    <li className="css-ache77-quickLinks-listItem">
                                        <a
                                            aria-current="false"
                                            href="https://community.myfitnesspal.com/en/groups/browse/mine"
                                            to="/groups/browse/mine"
                                            className="css-1i36ji2-QuickLinks-classNamees-link"

                                        >
                                            My Groups
                                        </a>
                                    </li>
                                    <li className="css-ache77-quickLinks-listItem">
                                        <a
                                            aria-current="false"
                                            href="https://community.myfitnesspal.com/en/discussions/bookmarked"
                                            to="/discussions/bookmarked"
                                            className="css-1i36ji2-QuickLinks-classNamees-link"

                                        >
                                            My Bookmarks
                                            <span className="quick-right"></span>
                                        </a>
                                    </li>
                                    <li className="css-ache77-quickLinks-listItem">
                                        <a
                                            aria-current="false"
                                            href="https://community.myfitnesspal.com/en/discussions/mine"
                                            to="/discussions/mine"
                                            className="css-1i36ji2-QuickLinks-classNamees-link"

                                        >
                                            My Discussions
                                            <span className="quick-right"></span>
                                        </a>
                                    </li>
                                    <li className="css-ache77-quickLinks-listItem">
                                        <a
                                            aria-current="false"
                                            href="https://community.myfitnesspal.com/en/drafts"
                                            to="/drafts"
                                            className="css-1i36ji2-QuickLinks-classNamees-link"

                                        >
                                            My Drafts
                                            <span className="quick-right"></span>
                                        </a>
                                    </li>
                                    <li className="css-ache77-quickLinks-listItem">
                                        <a
                                            aria-current="false"
                                            href="https://www.myfitnesspal.com/community-guidelines"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            to="https://www.myfitnesspal.com/community-guidelines"
                                            className="css-1i36ji2-QuickLinks-classNamees-link"

                                        >
                                            Community Guidelines
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="Box Tags">
                            <div className="pageHeadingBox">
                                <h4 aria-level="2">Popular Tags</h4>
                            </div>
                            <ul className="TagCloud pageBox">
                                <li className="TagCloud-Item">
                                    <a
                                        href="/en/discussions/tagged/Accountability"
                                        className="Tag_Accountability"
                                    >
                                        Accountability <span className="Count">274</span>
                                    </a>
                                </li>
                                <li className="TagCloud-Item">
                                    <a
                                        href="/en/discussions/tagged/Motivation"
                                        className="Tag_Motivation"
                                    >
                                        Motivation <span className="Count">259</span>
                                    </a>
                                </li>
                                <li className="TagCloud-Item">
                                    <a
                                        href="/en/discussions/tagged/food-logging"
                                        className="Tag_food-logging"
                                    >
                                        Food Logging <span className="Count">135</span>
                                    </a>
                                </li>
                                <li className="TagCloud-Item">
                                    <a
                                        href="/en/discussions/tagged/50-lbs-to-lose"
                                        className="Tag_50-lbs-to-lose"
                                    >
                                        50+ LBS to Lose <span className="Count">130</span>
                                    </a>
                                </li>
                                <li className="TagCloud-Item">
                                    <a
                                        href="/en/discussions/tagged/Challenges"
                                        className="Tag_Challenges"
                                    >
                                        Challenges <span className="Count">109</span>
                                    </a>
                                </li>
                                <li className="TagCloud-Item">
                                    <a
                                        href="/en/discussions/tagged/10-lbs-to-lose"
                                        className="Tag_10-lbs-to-lose"
                                    >
                                        10+ LBS to Lose <span className="Count">97</span>
                                    </a>
                                </li>
                                <li className="TagCloud-Item">
                                    <a
                                        href="/en/discussions/tagged/100-lbs-to-lose"
                                        className="Tag_100-lbs-to-lose"
                                    >
                                        100+ LBS to Lose <span className="Count">86</span>
                                    </a>
                                </li>
                                <li className="TagCloud-Item">
                                    <a
                                        href="/en/discussions/tagged/success-story"
                                        className="Tag_success-story"
                                    >
                                        Success Story <span className="Count">67</span>
                                    </a>
                                </li>
                                <li className="TagCloud-Item">
                                    <a
                                        href="/en/discussions/tagged/Meal-Prep"
                                        className="Tag_Meal-Prep"
                                    >
                                        Meal Prep <span className="Count">58</span>
                                    </a>
                                </li>
                                <li className="TagCloud-Item">
                                    <a
                                        href="/en/discussions/tagged/Friends"
                                        className="Tag_Friends"
                                    >
                                        Friends <span className="Count">57</span>
                                    </a>
                                </li>
                                <li className="TagCloud-Item">
                                    <a
                                        href="/en/discussions/tagged/Exercise"
                                        className="Tag_Exercise"
                                    >
                                        Exercise <span className="Count">57</span>
                                    </a>
                                </li>
                                <li className="TagCloud-Item">
                                    <a
                                        href="/en/discussions/tagged/Bodybuilding%20"
                                        className="Tag_Bodybuilding_"
                                    >
                                        Bodybuilding <span className="Count">56</span>
                                    </a>
                                </li>
                                <li className="TagCloud-Item">
                                    <a
                                        href="/en/discussions/tagged/Recipes"
                                        className="Tag_Recipes"
                                    >
                                        Recipes <span className="Count">55</span>
                                    </a>
                                </li>
                                <li className="TagCloud-Item">
                                    <a
                                        href="/en/discussions/tagged/low-carb"
                                        className="Tag_low-carb"
                                    >
                                        Low Carb <span className="Count">53</span>
                                    </a>
                                </li>
                                <li className="TagCloud-Item">
                                    <a
                                        href="/en/discussions/tagged/Health"
                                        className="Tag_Health"
                                    >
                                        Health <span className="Count">51</span>
                                    </a>
                                </li>
                                <li className="TagCloud-Item">
                                    <a
                                        href="/en/discussions/tagged/Intermittent-Fasting"
                                        className="Tag_Intermittent-Fasting"
                                    >
                                        Intermittent Fasting <span className="Count">50</span>
                                    </a>
                                </li>
                                <li className="TagCloud-Item">
                                    <a
                                        href="/en/discussions/tagged/Weight%20Loss"
                                        className="Tag_Weight_Loss"
                                    >
                                        Weight Loss <span className="Count">50</span>
                                    </a>
                                </li>
                                <li className="TagCloud-Item">
                                    <a
                                        href="/en/discussions/tagged/Lifting"
                                        className="Tag_Lifting"
                                    >
                                        Lifting <span className="Count">43</span>
                                    </a>
                                </li>
                                <li className="TagCloud-Item">
                                    <a
                                        href="/en/discussions/tagged/Maintenance%20"
                                        className="Tag_Maintenance_"
                                    >
                                        Maintenance <span className="Count">42</span>
                                    </a>
                                </li>
                                <li className="TagCloud-Item">
                                    <a
                                        href="/en/discussions/tagged/Fitness"
                                        className="Tag_Fitness"
                                    >
                                        Fitness <span className="Count">42</span>
                                    </a>
                                </li>
                                <li className="TagCloud-Item">
                                    <a href="/en/discussions/tagged/Diet" className="Tag_Diet">
                                        Diet <span className="Count">41</span>
                                    </a>
                                </li>
                                <li className="TagCloud-Item">
                                    <a href="/en/discussions/tagged/Keto" className="Tag_Keto">
                                        Keto <span className="Count">40</span>
                                    </a>
                                </li>
                                <li className="TagCloud-Item">
                                    <a href="/en/discussions/tagged/CICO" className="Tag_CICO">
                                        CICO <span className="Count">34</span>
                                    </a>
                                </li>
                                <li className="TagCloud-Item">
                                    <a
                                        href="/en/discussions/tagged/Fitbit"
                                        className="Tag_Fitbit"
                                    >
                                        Fitbit <span className="Count">33</span>
                                    </a>
                                </li>
                                <li className="TagCloud-Item">
                                    <a href="/en/discussions/tagged/Food" className="Tag_Food">
                                        Food <span className="Count">21</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="footer">
                <div className="container"></div>
                <ul className="nav">
                    <li>
                        <a href="//myfitnesspal.com/">Calorie Counter</a>
                    </li>
                    <li>
                        <a href="http://blog.myfitnesspal.com">Blog</a>
                    </li>

                    <li>
                        <a href="https://myfitnesspal.com/en/terms-of-service">Terms</a>
                    </li>
                    <li>
                        <a href="https://myfitnesspal.com/en/privacy-policy">Privacy</a>
                    </li>
                    <li>
                        <a href="//myfitnesspal.com/welcome/contact_us">Contact Us</a>
                    </li>
                    <li>
                        <a href="//myfitnesspal.com/api">API</a>
                    </li>
                    <li>
                        <a href="//myfitnesspal.com/jobs">Jobs</a>
                    </li>
                    <li>
                        <a href="https://community.myfitnesspal.com/en/categories/feature-suggestions-and-ideas">
                            Feedback
                        </a>
                    </li>
                    <li>
                        <a href="//myfitnesspal.com/welcome/guidelines">
                            Community Guidelines
                        </a>
                    </li>
                    <li>
                        <a href="https://www.myfitnesspal.com/privacy-policy#interest-based-advertising">
                            AdChoices
                        </a>
                    </li>
                    <li>
                        <a href="https://myfitnesspal.com/data-usage">
                            Do Not Sell My Personal Information
                        </a>
                    </li>
                </ul>
                <p className="text-center">© 2021 MyFitnessPal, Inc.</p>
            </div> */}
        </div>
    );
};
