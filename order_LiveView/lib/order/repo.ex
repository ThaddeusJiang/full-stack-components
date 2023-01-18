defmodule Order.Repo do
  use Ecto.Repo,
    otp_app: :order,
    adapter: Ecto.Adapters.Postgres
end
