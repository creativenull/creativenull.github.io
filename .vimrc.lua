-- Powered by projectlocal.vim
-- https://github.com/creativenull/projectlocal.vim
local pl = require("projectlocal.lsp")
local lspconfig = require("lspconfig")

lspconfig.astro.setup(pl.get_config({
  filetypes = { "astro", "typescript", "javascript" },
  init_options = {
    typescript = {
      tsdk = vim.fn.getcwd() .. "/node_modules/typescript/lib"
    },
  },
}))

vim.api.nvim_create_autocmd("FileType", {
  pattern = { "typescript", "javascript", "astro", "json" },
  command = 'let b:ale_fixers = ["prettier"]',
})
