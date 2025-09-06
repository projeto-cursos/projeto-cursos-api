const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

require('dotenv').config();

const app = express();
app.use(cors({
  origin: 'http://localhost:8080' // libera o front na porta 8080
}));
app.use(express.json());

// Conexão com Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Rotas CRUD de cursos
app.get('/api/cursos', async (req, res) => {
  const { data, error } = await supabase.from('cursos').select('*');
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

app.post("/api/cursos", async (req, res) => {
  const { titulo, descricao, carga_horaria } = req.body;

  // Validação básica
  if (!titulo || !descricao || !carga_horaria) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  try {
    const { data, error } = await supabase
      .from("cursos")
      .insert([{ titulo, descricao, carga_horaria }])
      .select(); // Garante que os dados inseridos sejam retornados

    if (error || !data || data.length === 0) {
      return res.status(500).json({ error: error?.message || "Erro ao inserir curso" });
    }

    res.status(201).json(data[0]);
  } catch (err) {
    console.error("Erro inesperado:", err);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});


app.put('/api/cursos/:id', async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, carga_horaria } = req.body;
  const { data, error } = await supabase.from('cursos').update({ titulo, descricao, carga_horaria }).eq('id', id);
    if (error || !data || data.length === 0) {
}

});

app.delete('/api/cursos/:id', async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from('cursos').delete().eq('id', id);
  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: 'Curso deletado com sucesso' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
