# Configuration Supabase - Étapes Interactives

## Prérequis

1. **Docker Desktop** doit être installé et lancé
    - macOS: https://www.docker.com/products/docker-desktop/
    - Vérifier que Docker est lancé : `docker ps`

## Étape 1 : Installer Supabase CLI

### macOS (Homebrew)

```bash
brew install supabase/tap/supabase
```

### Ou via npm (si vous préférez)

```bash
npm install -g supabase
```

### Vérifier l'installation

```bash
supabase --version
```

---

## Étape 2 : Initialiser Supabase localement

Dans le répertoire du projet (`/Users/walid/Development/nextnode/fleursdaujourdhui`), exécutez :

```bash
supabase init
```

**Résultat attendu** : Création du dossier `supabase/` avec le fichier `config.toml`

---

## Étape 3 : Démarrer Supabase local

```bash
supabase start
```

**Attention** : La première fois, ça télécharge plusieurs images Docker (~1-2GB). Ça peut prendre 5-10 minutes.

**Résultat attendu** : Vous verrez un output comme ceci :

```
Started supabase local development setup.

         API URL: http://localhost:54321
          DB URL: postgresql://postgres:postgres@localhost:54322/postgres
      Studio URL: http://localhost:54323
    Inbucket URL: http://localhost:54324
      JWT secret: super-secret-jwt-token-with-at-least-32-characters-long
        anon key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
service_role key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**⚠️ COPIEZ CES VALEURS** (surtout `anon key` et `service_role key`)

---

## Étape 4 : Mettre à jour le fichier .env

Ouvrez le fichier `.env` dans le projet et remplacez :

```env
# Remplacez ces valeurs avec celles affichées par `supabase start`
SUPABASE_ANON_KEY=votre-anon-key-copiée
SUPABASE_SERVICE_ROLE_KEY=votre-service-role-key-copiée
```

Le `DATABASE_URL` reste : `postgresql://postgres:postgres@localhost:54322/postgres`

---

## Étape 5 : Créer un projet cloud Supabase (Production)

1. Allez sur https://supabase.com
2. Cliquez sur "Start your project"
3. Connectez-vous avec GitHub
4. Cliquez sur "New Project"
5. Remplissez :
    - **Name** : `fleursdaujourdhui`
    - **Database Password** : Créez un mot de passe fort (SAUVEGARDEZ-LE !)
    - **Region** : Europe (Paris si disponible)
    - **Pricing Plan** : Free (pour commencer)
6. Cliquez sur "Create new project"

**Attendez 2-3 minutes** que le projet soit provisionné.

---

## Étape 6 : Lier le projet local au cloud

Une fois le projet créé, récupérez le **Project Reference ID** :

- Dans le Dashboard Supabase, allez dans **Settings** → **General**
- Copiez le **Reference ID** (format : `abcdefghijklmnop`)

Puis dans votre terminal :

```bash
supabase login
```

Suivez le lien pour vous authentifier dans le navigateur.

Ensuite, liez le projet :

```bash
supabase link --project-ref VOTRE-PROJECT-REF-ID
```

Entrez votre **Database Password** quand demandé.

---

## Étape 7 : Récupérer les credentials de production

Dans le Dashboard Supabase :

1. Allez dans **Settings** → **API**
2. Copiez :
    - **Project URL** (ex : `https://abcdefghijk.supabase.co`)
    - **anon public key**
    - **service_role key** (⚠️ secret, ne jamais commit !)

Créez un fichier `.env.production` :

```env
NODE_ENV=production
SUPABASE_URL=https://votre-project-ref.supabase.co
SUPABASE_ANON_KEY=votre-anon-key-production
SUPABASE_SERVICE_ROLE_KEY=votre-service-role-key-production
DATABASE_URL=postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:5432/postgres
PAYLOAD_SECRET=générez-une-string-aléatoire-sécurisée
```

Le `DATABASE_URL` de production est dans **Settings** → **Database** → **Connection string** → **URI**

---

## Commandes utiles

```bash
# Voir le status
supabase status

# Accéder au Studio (interface web)
# Ouvrez http://localhost:54323 dans votre navigateur

# Stopper les services (garde les données)
supabase stop

# Stopper et réinitialiser les données
supabase stop --no-backup
supabase db reset

# Voir les logs
supabase logs
```

---

## ✅ Checklist finale

- [ ] Docker Desktop lancé
- [ ] `supabase start` exécuté avec succès
- [ ] Copié `anon key` et `service_role key` dans `.env`
- [ ] Studio accessible sur http://localhost:54323
- [ ] Projet cloud créé sur supabase.com
- [ ] Projet local lié au cloud (`supabase link`)
- [ ] Credentials de production sauvegardés dans `.env.production`

---

**Quand vous aurez terminé ces étapes, dites-moi et je continuerai l'installation de Payload CMS !**
