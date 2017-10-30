# CEP Extension Installer

CEP Extension Installer is a redistributable installer for CEP extensions; it is meant to be used by extension developers as an efficient and professional way to package their extensions for installation outside of the Adobe Add-ons service.

![](http://i.cubeupload.com/DcSbMN.png)

# How it works

The CEP Extension Installer uses source code found in the well known and popular, [ZXPInstaller](https://github.com/CreativeDo/ZXPInstaller) by CreativeDo, this installer removes the drag and drop features, replacing the extension path with a hard coded one, as well as replacing the design by one inspired by Adobe's latest installer design.

# Setup (OS X and Windows)

1. Install [Node.js](https://nodejs.org).

1. Install the dependencies and start the app.

  ```
  npm install
  npm run dev
  ```

# Editing the installer for your extension

You need the following things:
* An extension packaged in Adobe´s ZXP format, with proper timestamping.
* An icon for your extension (If you do not have one, use the generic ZXP icon that comes with the repository.)

1. Head into the index.html file located within the `assets` folder and modify the following HTML fields:
* `productName` - Replace it with the name of your extension.
* `productVersion` - Replace it with the version number of the extension you are installing.

2. Replace the `prodIcon.png` file located in the images folder with an icon for your extension, if you do not have one, feel free to keep the default one.

3. Head into the `bin` directory and add your extension in `.ZXP` format there, unless you want to edit the code, I also recommend renaming your extensions to `extension.zxp`.

4. If you want to change the icons for the windows `.exe` or mac `.app` files, replace the `.ico` file(Windows) and the `.icns` file(Mac) in the assets folder with your custom icons.

### Extra Steps

The installer also comes with an "ad" area for advertising a website, or something similar. To modify it locate the `carousel` div and edit the `description` element with whatever text you want to display. You can also change the text of the button. 

If you want to remove the "ad" from your extension, just comment out the `carousel` div from start to end. 

# Compiling (OS X)

1. Install [Homebrew](http://brew.sh/).

1. Install `wine` and `makensis` for `electron-builder` (needed to build the Windows executable).

  ```
  brew install wine makensis
  ```

1. Run the build script

  ```
  npm run build
  ```

1. You can find the compiled binaries in the `release` directory.

# Compiling (Windows)

You can only compile the windows executable on Windows; you have to use a Mac to compile the Mac version of the installer, the only way around this is to use an online build server.

1. Run the build script for Windows
  ```
  npm run build:win
  ```
2. You should find the compiled Windows binary in the `win` folder within the `releases` folder.

### Extra Steps

Since a Mac app is just a folder, it can easily be packaged, distributed and be "self-contained," in the case of Windows, this is not the case, and the installer requires several files and folders to function on Windows, making the packaging of your extension rather troublesome. 

At present, there is no way to package an electron application to be "self-contained" on Windows. You can, however, use Enigma Virtual Box, to "self-contain" the installer: [http://enigmaprotector.com/en/aboutvb.html](http://enigmaprotector.com/en/aboutvb.html).
