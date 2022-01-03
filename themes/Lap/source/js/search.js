// A local search script with the help of [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search)
// Copyright (C) 2017
// Liam Huang <http://github.com/Liam0205>
// This library is free software; you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as
// published by the Free Software Foundation; either version 2.1 of the
// License, or (at your option) any later version.
//
// This library is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public
// License along with this library; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
// 02110-1301 USA
//
'use strict';

const searchFunc = function (path, search_id, content_id) {
  // 0x00. environment initialization
  const BTN = "<i id='local-search-close'>×</i>";
  const $input = document.getElementById(search_id);
  const $resultContent = document.getElementById(content_id);
  $resultContent.innerHTML =
    BTN + "<ul><span class='local-search-empty'>...<span></ul>";
  $.ajax({
    // 0x01. load xml file
    url: path,
    dataType: 'xml',
    success: function (xmlResponse) {
      // 0x02. parse xml file
      const datas = $('entry', xmlResponse)
        .map(function () {
          //   console.log(this)
          return {
            title: $('title', this).text(),
            content: $('content', this).text(),
            url:
              $('url', this).text() !== ''
                ? $('url', this).text()
                : $('link', this).attr('href'),
          };
        })
        .get();
      $resultContent.innerHTML = '';

      $input.addEventListener('input', () => {
        // 0x03. parse query to keywords list
        let str = '<ul class="search-result-list">';
        const keywords = this.value
          .trim()
          .toLowerCase()
          .split(/[\s-]+/);
        $resultContent.innerHTML = '';
        if (this.value.trim().length <= 0) {
          return;
        }
        // 0x04. perform local searching
        datas.forEach((data) => {
          let isMatch = true;
          // const content_index = [];
          if (!data.title || data.title.trim() === '') {
            data.title = 'Untitled';
          }
          const orig_data_title = data.title.trim();
          const data_title = orig_data_title.toLowerCase();
          const orig_data_content = data.content.trim().replace(/<[^>]+>/g, '');
          const data_content = orig_data_content.toLowerCase();
          const data_url = data.url;
          let index_title = -1;
          let index_content = -1;
          let first_occur = -1;
          // only match artiles with not empty contents
          if (data_content !== '') {
            keywords.forEach((keyword, i) => {
              index_title = data_title.indexOf(keyword);
              index_content = data_content.indexOf(keyword);

              if (index_title < 0 && index_content < 0) {
                isMatch = false;
              } else {
                if (index_content < 0) {
                  index_content = 0;
                }
                if (i === 0) {
                  first_occur = index_content;
                }
                // content_index.push({index_content:index_content, keyword_len:keyword_len});
              }
            });
          } else {
            isMatch = false;
          }
          // 0x05. show search results
          if (isMatch) {
            //   console.log(data)
            str +=
              "<li><a href='" +
              '/' +
              data_url +
              "' class='search-result-title' target='_blank'>" +
              orig_data_title +
              '</a>';
            const content = orig_data_content;
            if (first_occur >= 0) {
              // cut out 100 characters
              let start = first_occur - 20;
              let end = first_occur + 80;

              if (start < 0) {
                start = 0;
              }

              if (start === 0) {
                end = 100;
              }

              if (end > content.length) {
                end = content.length;
              }

              let match_content = content.substr(start, end);

              // highlight all keywords
              keywords.forEach((keyword) => {
                const regS = new RegExp(keyword, 'gi');
                match_content = match_content.replace(
                  regS,
                  '<em class="search-keyword">' + keyword + '</em>'
                );
              });

              str += '<p class="search-result">' + match_content + '...</p>';
            }
            str += '</li>';
          }
        });
        str += '</ul>';
        if (str.indexOf('<li>') === -1) {
          return ($resultContent.innerHTML =
            BTN +
            "<ul><span class='local-search-empty'>Nothing here...check back later!<span></ul>");
        }
        $resultContent.innerHTML = BTN + str;
      });
    },
  });
  $(document).on('click', '#local-search-close', () => {
    $('#local-search-input').val('');
    $('#local-search-result').html('');
  });
};

// eslint-disable-next-line no-unused-vars
const getSearchFile = () => {
  const path = '/search.xml';
  searchFunc(path, 'local-search-input', 'local-search-result');
};
