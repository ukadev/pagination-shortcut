// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.commands.onCommand.addListener(function (command) {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
        if (tabs.length > 0) {
            switch (command) {
                case 'nextPage':
                    executeNextPage(tabs[0]);
                    break;
                case 'previousPage':
                    executePreviousPage(tabs[0]);
                    break;
            }
        }
    });
});


function executeNextPage(tab) {
    let id = tab.id;
    let url = tab.url;
    chrome.tabs.update(id, {url: url})
}

function executePreviousPage(tab) {
    console.log(tab)
}