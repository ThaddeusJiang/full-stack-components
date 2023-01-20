defmodule Order.Room do
  def fake_fetch do
    %{"updated_at" => DateTime.utc_now() |> DateTime.to_iso8601()}
  end
end
