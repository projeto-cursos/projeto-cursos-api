const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

require('dotenv').config();

const app = express();
app.use(cors({
  origin: 'http://localhost:8080'
}));
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Guto - Rota GET para listar todos os cursos
app.get('/api/cursos', async (req, res) => {
  const { data, error } = await supabase.from('cursos').select('*');
  
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  
  res.json(data);
});

// Rhuan - Rota POST para criar um novo curso
app.post("/api/cursos", async (req, res) => {
  const { titulo, descricao, carga_horaria } = req.body;

  if (!titulo || !descricao || !carga_horaria) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  try {
    const { data, error } = await supabase
      .from("cursos")
      .insert([{ titulo, descricao, carga_horaria }])
      .select();

    if (error) {
      return res.status(500).json({ error: error.message || "Erro ao inserir curso" });
    }
    
    res.status(201).json(data[0]);
  } catch (err) {
    console.error("Erro inesperado:", err);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// Mauricio - Rota PUT para atualizar um curso
app.put('/api/cursos/:id', async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, carga_horaria } = req.body;

  if (!titulo || !descricao || !carga_horaria) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  try {
    const { data, error } = await supabase
      .from('cursos')
      .update({ titulo, descricao, carga_horaria })
      .eq('id', id)
      .select();

    if (error) {
      return res.status(500).json({ error: error.message || "Erro ao atualizar curso" });
    }
    
    if (!data || data.length === 0) {
      return res.status(404).json({ error: "Curso não encontrado" });
    }

    res.json(data[0]);
  } catch (err) {
    console.error("Erro inesperado:", err);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// Emanuel - Rota DELETE para deletar um curso
app.delete('/api/cursos/:id', async (req, res) => {
  const { id } = req.params;
  
  if (!id) {
    return res.status(400).json({ error: "ID do curso não fornecido" });
  }
  
  try {
    const { error, count } = await supabase
      .from('cursos')
      .delete()
      .eq('id', id);
      
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    
    if (count === 0) {
      return res.status(404).json({ error: "Curso não encontrado" });
    }
    
    res.status(200).json({ message: "Curso deletado com sucesso" });
  } catch (err) {
    console.error("Erro inesperado:", err);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));