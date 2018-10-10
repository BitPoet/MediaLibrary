# MediaLibrary
Simple Media Library Module for the ProcessWire CMS

## Status

Beta

## Compatibility

This module is compatible with ProcessWire 3.0

## Description

This module adds a MediaLibrary template with MediaImages and MediaFiles fields to ProcessWire.

Extends CKEditor's link and image pickers to allow quick selection of library pages. Only libraries under the edited page itself or one of its parents are available to keep things organized.

![Screen capture](https://bitpoet.github.io/img/medialibrarycapture.gif)

An overview of all configured libraries is available in the "Media" entry in the backend:

![Screenshot Media Overview](https://bitpoet.github.io/img/medialibrary.png)

## Changelog

* 0.1.2: Added option in MediaLibrary to hide libraries from the page tree and added namespace
  Allow deletion of libraries from the Media admin page
  No more support for legacy PW (< 3.0.0)
* 0.1.1: Module config setting: show Media Libraries collapsed (default) or expanded in the image dialog
* 0.1.0: Fix "Using $this when not in object context" error
* 0.0.9: Avoid error when one of MediaImages or MediaFiles fields was removed from the MediaLibrary template
* 0.0.8: Choose either select dropdown or radios as library selection method in module configuration
* 0.0.7: Allow nesting of libraries (sublibraries of relevant libraries are also listed in link and image picker).
* 0.0.7: Fixed a bug in the image picker where the libraries dropdown was filled incorrectly after a library was selected.

## Installs

By installing Media Library, the ProcessMediaLibraries (Media Library Overview) module that adds the "Media" menu item in the backend is installed along. So if you uninstall Media Library, make sure you also uninstall ProcessMediaLibrary.

## License

Mozilla Public License v2, see LICENSE file for details.
