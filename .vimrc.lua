-- Powered by projectlocal.vim
-- https://github.com/creativenull/projectlocal.vim
local user_config = require("projectlocal.lsp").get_config()

require("lspconfig").astro.setup(vim.tbl_extend("force", user_config, {
  filetypes = { "astro", "typescript", "typescriptreact", "javascript", "javascriptreact", "markdown" },
  init_options = {
    typescript = {
      tsdk = string.format("%s/node_modules/typescript/lib", vim.call("getcwd")),
    },
  },
}))
