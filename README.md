# Github Readme Blog Post Action

A (somewhat) simple github action that generates a set of cards for recent blog posts.

Here's an example of how it looks given the URLs for DEV Community, JavaScript Weekly, and Echo JS:

<!-- post-list:start -->
## DEV Community 👩‍💻👨‍💻

The most recent home feed on DEV Community 👩‍💻👨‍💻.

[Read more](https://dev.to)
> Last updated: Monday, December 19, 2022 at 11:11:57 PM

> Showing 5 of 12 posts.

[![The Rainbow of Crypto Schemes: Embracing the many Flavours, Beyond the Basic Ponzi Scheme](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community_👩‍💻👨‍💻/The_Rainbow_of_Crypto_Schemes__Embracing_the_many_Flavours__Beyond_the_Basic_Ponzi_Scheme.svg)](https://dev.to/bipbopsadrobot/the-rainbow-of-crypto-schemes-embracing-the-many-flavours-beyond-the-basic-ponzi-scheme-k8d)
[![7 best websites to get tons of fonts for free](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community_👩‍💻👨‍💻/7_best_websites_to_get_tons_of_fonts_for_free.svg)](https://dev.to/mohsenkamrani/7-best-websites-to-get-tons-of-fonts-for-free-1nce)
[![Data Structures: Arrays and Lists in Comparison](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community_👩‍💻👨‍💻/Data_Structures__Arrays_and_Lists_in_Comparison.svg)](https://dev.to/manukanne/data-structures-arrays-and-lists-in-comparison-518p)
[![Quick bytes to integer (or other type) conversion in Python](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community_👩‍💻👨‍💻/Quick_bytes_to_integer_(or_other_type)_conversion_in_Python.svg)](https://dev.to/eliteraspberries/quick-bytes-to-integer-or-other-type-conversion-in-python-27lg)
[![⚠150+ Expressões JavaScript Que Você Precisa Conhecer⚠](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community_👩‍💻👨‍💻/⚠150+_Expressões_JavaScript_Que_Você_Precisa_Conhecer⚠.svg)](https://dev.to/mpetry/150-expressoes-javascript-que-voce-precisa-conhecer-2on)


## JavaScript Weekly

A newsletter of JavaScript articles, news and cool projects

[Read more](https://javascriptweekly.com/)
> Last updated: Monday, December 19, 2022 at 11:12:00 PM

> Showing 4 of 4 posts.

[![A new jQuery release for Xmas](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/A_new_jQuery_release_for_Xmas.svg)](https://javascriptweekly.com/issues/619)
[![Vite 4.0 released](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Vite_4.0_released.svg)](https://javascriptweekly.com/issues/618)
[![Splitting up sentences with Intl.Segmenter](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Splitting_up_sentences_with_Intl.Segmenter.svg)](https://javascriptweekly.com/issues/617)
[![JavaScript Vocoder Puccini](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/JavaScript_Vocoder_Puccini.svg)](https://javascriptweekly.com/issues/616)


## Echo JS

Description pending

[Read more](
http://www.echojs.com
)
> Last updated: Monday, December 19, 2022 at 11:12:07 PM

> Showing 5 of 30 posts.

[![API with NestJS #87. Writing unit tests in a project with raw SQL](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/API_with_NestJS__87._Writing_unit_tests_in_a_project_with_raw_SQL.svg)](https://wanago.io/2022/12/19/api-nestjs-unit-tests-raw-sql/)
[![Callbacks in JavaScript](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Callbacks_in_JavaScript.svg)](https://www.ma-no.org/en/programming/javascript/callbacks-in-javascript)
[![GitHub - Jm-Zion/rn-wave-bottom-bar: 🌊 Animated Tab Bottom Bar for react-navigation](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/GitHub_-_Jm-Zion_rn-wave-bottom-bar__🌊_Animated_Tab_Bottom_Bar_for_react-navigation.svg)](https://github.com/Jm-Zion/rn-wave-bottom-bar)
[![GitHub - prabhuignoto/react-visual-grid: 🪟 Image Grid / Masonry Layout for React](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/GitHub_-_prabhuignoto_react-visual-grid__🪟_Image_Grid___Masonry_Layout_for_React.svg)](https://github.com/prabhuignoto/react-visual-grid)
[![GitHub - studboo/boo-boo-api](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/GitHub_-_studboo_boo-boo-api.svg)](https://github.com/studboo/boo-boo-api)


<!-- post-list:end -->

# Quick Start

This action runs out-of-the-box, with only one provided input.

Create a `.yml` file with the desired filename, and paste the following:

```yml
on:
  push:
  schedule:
    - cron: "0 */6 * * *"
jobs:
  blog:
    runs-on: ubuntu-latest
    name: Fetch and Generate Blog Posts
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Generate
        uses: ErrorGamer2000/github-readme-blog-post-action@v1
        with:
          feed_urls: FEEDS
      - name: Commit changed files
        uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: Save Generated Blog Posts
          skip_checkout: true
```

Replace the FEEDS with a comma-seperated list of [RSS feed](https://rss.com/blog/how-do-rss-feeds-work/) URLs, add

```md
<!-- blog-post-list:start -->
<!-- blog-post-list:end -->
```

in the README where you want the list, and **_BAM!_** You have yourself an automatic action that runs every 6 hours and when you change any of the files in your readme!

# Inputs

<table>
  <thead>
    <tr>
      <th>Option Name</th>
      <th>Type</th>
      <th>Default Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>feed_urls</code></td>
      <td><code>string</code></td>
      <td><code>""</code></td>
      <td>A (comma-seperated) list of RSS feed URLs to load posts from. This is the only required input.</td>
    </tr>
    <tr>
      <td><code>max_posts_per_url</code></td>
      <td><code>number</code></td>
      <td><code>5</code></td>
      <td>The maximum number of posts to show for each feed. If the number of posts is less than this, then all of the posts will be shown.</td>
    </tr>
    <tr>
      <td><code>position_indicator</code></td>
      <td><code>string</code></td>
      <td><code>blog-post-list</code></td>
      <td>The text of the comments that the action uses to inject the images into the README file. Everything between the two comments in the form <code>&lt;!-- position_indicator:start --&gt;</code> and <code>&lt;!-- position_indicator:end --&gt;</code> is replaced. Changing this can allow you to use multiple configurations for different feeds by using different markers for each.</td>
    </tr>
    <tr>
      <td><code>show_feed_data</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Whether or not to show the generated markdown describing the feed, which includes the title of the feed, the description of the feed, the <code>Read More</code> link, the last updated date, and the post count. Each of these can also be individually toggled with the following options. This will override any of the specific options, so it is better to disable/enable them specifically if you want to remove some elements.</td>
    </tr>
    <tr>
      <td><code>show_feed_title</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Whether or not to show the header containing the title of the feed. This will be formatted as an <code>h2</code> header. An option to customize this header will be in a future update.</td>
    </tr>
    <tr>
      <td><code>show_feed_description</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Whether or not to show the title of the feed that is provided by the RSS feed.</td>
    </tr>
    <tr>
      <td><code>show_read_more</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Whether or not to show the <code>Read More</code> link under the feed description.</td>
    </tr>
    <tr>
      <td><code>show_last_updated_date</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Whether or not to show the date and time of the last update of the list.</td>
    </tr>
    <tr>
      <td><code>show_post_count</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Whether or not to show the number of posts shown and the total number of posts provided by the RSS feed.</td>
    </tr>
    <tr>
      <td><code>show_post_date</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Whether or not to show the date of each post on the card.</td>
    </tr>
    <tr>
      <td><code>locale</code></td>
      <td><code>string</code></td>
      <td><code>"en"</code></td>
      <td>The locale of the project. This is used <strong>purely</strong> for formatting the dates of the cards and last update.</td>
    </tr>
    <tr>
      <td><code>time_zone</code></td>
      <td><code>string</code></td>
      <td><code>"UTC"</code></td>
      <td>A valid time zone to use for the last updated date.</td>
    </tr>
    <tr>
      <td><code>output_dir</code></td>
      <td><code>string</code></td>
      <td><code>"blog-post-list-output"</code></td>
      <td>The directory to store the post card images in. Must be in the root directory (i.e. no path separators <code>/</code> or <code>\</code>) and cannot include the characters <code>/\?%*:|"&lt;&gt;</code>.</td>
    </tr>
<!--
    <tr>
      <td><code></code></td>
      <td><cde></cde></td>
      <td><code></code></td>
      <td></td>
    </tr>
-->
  </tbody>
</table>

# Usage Notes

- Make sure that you use an action that will commit changed files to the repository after this action has run, so that the files actually get changed.
- I am a solo dev, and will get back to you as soon as I can, so expect to wait several weeks depending on how many other issues there are.
- Enjoy and share! 🤗
