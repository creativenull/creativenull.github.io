-- Powered by projectlocal.vim
-- https://github.com/creativenull/projectlocal.vim
local pl = require("projectlocal.lsp")

require("lspconfig").astro.setup(pl.get_config({
  init_options = {
    typescript = {
      tsdk = string.format("%s/node_modules/typescript/lib", vim.call("getcwd")),
    },
  },
}))

require('lspconfig').tsserver.setup(pl.get_config())

-- Spell check for md files
vim.api.nvim_create_autocmd("FileType", {
  pattern = { "markdown" },
  command = "setlocal spell",
})
