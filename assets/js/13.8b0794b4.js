(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{306:function(t,e,n){"use strict";n.r(e);var a=n(42),s=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("PostHeader"),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("Info")]),t._v(" "),n("p",[t._v("This is a two part series on how my vim is setup for embedded systems development. The first part shows what vim plugins I use and how I have them setup, while part two will cover the cmake portion on setting up a build workflow and a template.")])]),t._v(" "),n("p",[t._v("There has been a lot of tutorials on setting up vim for a Python/JavaScript/Java/C/C++ environment, but I did not find a variety of tutorials on how to setup a C/C++ environment for embedded development. I did, however, find one great post "),n("a",{attrs:{href:"http://www.alexeyshmalko.com/2014/using-vim-as-c-cpp-ide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("written by Alexey"),n("OutboundLink")],1),t._v(" where he did explain how to setup for one. Although his post does a great job explaining, there were still some things missing that I want to add for my embedded development environment. Things that I wanted to work for my setup:")]),t._v(" "),n("ul",[n("li",[t._v("Using "),n("code",[t._v("cmake")]),t._v(" instead of "),n("code",[t._v("make")]),t._v(".")]),t._v(" "),n("li",[t._v("Build a custom gcc toolchain for specific boards.")]),t._v(" "),n("li",[t._v("Have an all-in-one solution package that features IDE-like tools like linting, auto-completion, goto definition, etc.")])]),t._v(" "),n("p",[t._v("So after a bit of digging and a lot of frustration on how limited resources there were, I finally found some useful resources that I was able to put together and have it working. Here are my findings and how I was able to get myself up and running for my requirements. The development board I will be using is the TI TM4C129EXL microcontroller, but the steps on setup is very similiar for other microcontrollers like other TI, STM manufacturers. Here is a picture.")]),t._v(" "),n("img",{attrs:{width:"50%",src:"http://image.itmedia.co.jp/edn/articles/1509/27/ts150925_TI01.jpg"}}),t._v(" "),n("p",[t._v("So the things to install (this might differ since my setup is on a Linux system):")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://neovim.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("neovim"),n("OutboundLink")],1),t._v(" or "),n("a",{attrs:{href:"https://www.vim.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vim8"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("strong",[t._v("vim-plug")]),t._v(" - plugin manager | "),n("a",{attrs:{href:"https://github.com/junegunn/vim-plug",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("strong",[t._v("deoplete")]),t._v(" - auto-completion engine | "),n("a",{attrs:{href:"https://github.com/Shougo/deoplete.nvim",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("strong",[t._v("supertab")]),t._v(" - for tab completion, instead of using Ctrl+n and Ctrl+p | "),n("a",{attrs:{href:"https://github.com/ervandew/supertab",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("strong",[t._v("LanguageClient-neovim")]),t._v(" - LSP client for neovim, also works in vim | "),n("a",{attrs:{href:"https://github.com/autozimu/LanguageClient-neovim",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("strong",[t._v("clang")]),t._v(" - to get "),n("code",[t._v("clangd")]),t._v(" which will be used as our LSP server backend | "),n("a",{attrs:{href:"https://clang.llvm.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("strong",[t._v("cmake")]),t._v(" - build tool | "),n("a",{attrs:{href:"https://cmake.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("strong",[t._v("arm-gcc-toolchain")]),t._v(" - C compiler for ARM boards | "),n("a",{attrs:{href:"https://developer.arm.com/open-source/gnu-toolchain/gnu-rm/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"vim-install-plugins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vim-install-plugins","aria-hidden":"true"}},[t._v("#")]),t._v(" Vim - install plugins")]),t._v(" "),n("div",{staticClass:"language-vim extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vim"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("call")]),t._v(" plug#"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~/.local/share/nvim/plugged'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('" Auto-completion')]),t._v("\nPlug "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Shougo/deoplete.nvim'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'do'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("':UpdateRemotePlugins'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('" Tab for auto-completion')]),t._v("\nPlug "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ervandew/supertab'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('" Language client for a Language Server Protocol support')]),t._v("\nPlug "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'autozimu/LanguageClient-neovim'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'branch'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'next'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'do'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bash install.sh'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('" Fuzzy file finder')]),t._v("\nPlug "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'junegunn/fzf'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("call")]),t._v(" plug#"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('" Plugin and Indent enable')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("filetype")]),t._v(" plugin indent "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v("\n")])])]),n("p",[t._v("Next, we reload vim and execute command "),n("code",[t._v(":PlugInstall")]),t._v(" to install the plugins, and reloading vim should load our plugins.")]),t._v(" "),n("h3",{attrs:{id:"plugin-configs-and-key-bindings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plugin-configs-and-key-bindings","aria-hidden":"true"}},[t._v("#")]),t._v(" Plugin configs and key bindings")]),t._v(" "),n("p",[t._v("Now we add our global configs for our plugins. We want to make sure deoplete starts by default, supertab has an issue where it will tab complete from the bottom-top (although this is a feature in supertab) I like my tab completion from the top-bottom. Next we add our config for LanguageClient-neovim, the LSP server I will be using is "),n("code",[t._v("clangd")]),t._v(". The only binding I use is the goto definition, but you can add other bindings for LanguageClient-neovim more can found on their github repo.")]),t._v(" "),n("div",{staticClass:"language-vim extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vim"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('" --- Deoplete Options ---')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" g"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("deoplete#enable_at_startup"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('" --- SuperTab Options --- ')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" g"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("SuperTabDefaultCompletionType"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<C-n>'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('" --- LanguageClient Options --- ')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" g"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("LanguageClient_serverCommands"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\\ "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'clangd'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\\ "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cpp'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'clangd'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\\ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('" LanguageClient bindings')]),t._v("\nnnoremap "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("F5"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("call")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("LanguageClient_contextMenu")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("CR"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nnnoremap "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("silent")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("gd")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("call")]),t._v(" LanguageClient#"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("textDocument_definition")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("CR"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),n("p",[t._v("This should be it on the vim side of things. In the next part I will show my setup of cmake and a template I usually use for developing for the TM4C microcontroller - which is just a blank template from their website but very helpful. Stay tuned for more.")]),t._v(" "),n("hr"),t._v(" "),n("QuickAbout"),t._v(" "),n("hr"),t._v(" "),n("Footer")],1)},[],!1,null,null,null);e.default=s.exports}}]);