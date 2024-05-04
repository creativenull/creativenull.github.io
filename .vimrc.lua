-- Powered by projectlocal.vim
-- https://github.com/creativenull/projectlocal.vim
local pl = require("projectlocal.lsp")

-- Spell check for md files
vim.api.nvim_create_autocmd("FileType", {
  pattern = { "markdown" },
  command = "setlocal spell",
})
