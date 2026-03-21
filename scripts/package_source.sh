#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT_DIR="$ROOT_DIR/release"
STAMP="$(date +%Y%m%d-%H%M%S)"
ARCHIVE="$OUT_DIR/hippo-soc-ui-prototype-$STAMP.tar.gz"

mkdir -p "$OUT_DIR"

tar \
  --exclude='.git' \
  --exclude='release' \
  --exclude='node_modules' \
  -czf "$ARCHIVE" \
  -C "$ROOT_DIR" .

echo "$ARCHIVE"
