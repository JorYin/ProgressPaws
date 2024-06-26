import { useEffect, useState } from "react";

import { createClient } from "@supabase/supabase-js";
import type {Database} from "../utils/database.types";

export const supabase = createClient<Database>(import.meta.env.VITE_API_SUPABASE_URL, import.meta.env.VITE_API_SUPABASE_KEY);

type Country = Database['public']['Tables']['countries']['Row'];

function SupabaseTest() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data || []);
  }

  return (
    <div>
        <h1 className="text-3xl font-bold underline">
          Countries in the database!
        </h1>
      <ul>
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SupabaseTest;
