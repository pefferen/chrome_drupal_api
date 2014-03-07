/**
 * This file contains the functions for the Chrome plugin to search the Drupal
 * API from the omnibar
 */

function resetDefaultSuggestion() {
  // Set default suggestion in Omnibar
  chrome.omnibox.setDefaultSuggestion({
    "description": 'dapi: Search the Drupal API for %s'
  });
}

resetDefaultSuggestion();

function navigate(url) {
  // USe url to navigate to
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.update( tabs[0].id, { url: url } );
  });
}

chrome.omnibox.onInputEntered.addListener(function(text) {
  navigate("http://api.drupal.org/api/drupal/7/search/" + text);
});
